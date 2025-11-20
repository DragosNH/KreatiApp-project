const canvas = document.getElementById("picker");
const ctx = canvas.getContext("2d");
const rules = document.getElementById("rules");
const sampleCols = document.querySelectorAll(".col");

canvas.width = 300;
canvas.height = 300;

const radius = canvas.width / 2;
const center = radius;

// ------------ Draw color wheel -------------------
function drawColorWheel() {
    const img = ctx.createImageData(canvas.width, canvas.height);
    const data = img.data;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {

            const dx = x - center;
            const dy = y - center;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > radius) continue; // outside circle → transparent

            let angle = Math.atan2(dy, dx) * 180 / Math.PI;
            if (angle < 0) angle += 360;

            const saturation = dist / radius * 100;  // 0 → 100%
            const lightness = 50;                   // strong vivid colors

            const [r, g, b] = hslToRgb(angle, saturation, lightness);

            const index = (y * canvas.width + x) * 4;
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = 255;
        }
    }

    ctx.putImageData(img, 0, 0);
}


drawColorWheel();

// ------------ Utility functions -------------------
function hslToRgb(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) r = g = b = l;
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map(v => v.toString(16).padStart(2, "0"))
        .join("");
}

// ------------ Update sample columns -------------------
function updateSample(col, rgb) {
    const [r, g, b] = rgb;
    const hex = rgbToHex(r, g, b);

    col.querySelector(".sample").style.background = hex;

    col.querySelector(".rgb.r").value = r;
    col.querySelector(".rgb.g").value = g;
    col.querySelector(".rgb.b").value = b;

    col.querySelector(".hex").value = hex;
}

// ------------ Color rule calculations -------------------
function getRuleColors(h, s, l, type) {
    switch (type) {

        case "1": // Analogous (3 colors)
            return [
                h - 30,
                h,
                h + 30,
                null,
                null
            ];

        case "2": // Monochromatic (varying lightness)
            return [
                h,
                h,
                h,
                h,
                h
            ].map((hue, i) => ({ hue, light: Math.max(10, Math.min(90, l * 100 + (i - 2) * 15)) }));

        case "3": // Triad (3 colors)
            return [
                h,
                h + 120,
                h - 120,
                null,
                null
            ];

        case "4": // Complementary (2 colors)
            return [
                h,
                h + 180,
                null,
                null,
                null
            ];

        case "5": // Custom (only selected)
            return [
                h,
                null,
                null,
                null,
                null
            ];

        default:
            return [h];
    }
}


// ------------ Main picker logic -------------------
function pickColor(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > radius) return;

    const angle = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;

    const saturation = (dist / radius) * 100;
    const lightness = 50;

    const rule = rules.querySelector(".active").dataset.type;
    const ruleSet = getRuleColors(angle, saturation, lightness, rule);

    // Always update sample 0 (selected)
    const rgbSelected = hslToRgb(angle, saturation, lightness);
    updateSample(document.querySelector('[data-sample="0"]'), rgbSelected);

    // Update rule-driven samples
    sampleCols.forEach(col => {
        const i = parseInt(col.dataset.sample);
        if (i === 0) return;

        const ruleValue = ruleSet[i];

        if (!ruleValue) {
            updateSample(col, [255, 255, 255]); // blank if rule doesn't use it
            col.querySelector(".sample").style.background = "#fff";
            col.querySelector(".hex").value = "";
            return;
        }

        // If the rule returned {hue, light}
        if (typeof ruleValue === "object") {
            const { hue, light } = ruleValue;
            const rgb = hslToRgb((hue + 360) % 360, saturation, light);
            updateSample(col, rgb);
            return;
        }

        // Otherwise it's a hue number
        const rgb = hslToRgb((ruleValue + 360) % 360, saturation, lightness);
        updateSample(col, rgb);
    });
}


canvas.addEventListener("mousedown", pickColor);

// ------------ Rule switching -------------------
rules.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        rules.querySelector(".active").classList.remove("active");
        li.classList.add("active");
    });
});
