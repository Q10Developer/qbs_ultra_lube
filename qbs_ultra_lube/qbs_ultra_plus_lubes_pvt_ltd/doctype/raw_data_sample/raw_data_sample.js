// Copyright (c) 2025, Swarada and contributors
// For license information, please see license.txt

//showFieldMap
const showFieldMap = {
    "Castrol (I) Pvt. Ltd.": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Blending": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Sequence IV @ 150 °C Tendency",
            "Sequence IV @ 150 °C Stability",
            "Sequence IV @ 150 °C Result",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "HTHS @150°C (ASTM D4683)",
            "Viscosity, MRV / Yield Stress -20C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -25C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -30C (ASTM D4684)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Average Viscosity Blend @ 100°C (four significant figure)"
        ],
        "Bulk Filling Tanker OUT- Blending": [
            "Average KV@ 100°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
        ],
        "Filling Line Tea Break Sample": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
        ],
        "Filling Line Lunch Break Sample": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
        ],
        "Filling Line End Sample": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
        ],
        "Filling Line Break Sample": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
        ],
        "Filling Line Dinner Break Sample": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
        ],
        "Receipt – SFG": [
            "FTIR",
            "KV@-40°C in Cst  (ISO 3104)",
            "Viscosity Index",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Boron",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Refractive Index",
            "Titanium",
        ],
        "First Filled sample": [
            "TAN (ASTM D664)",
            "KV@-40°C in Cst  (ISO 3104)",
            "Viscosity Index",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Refractive Index",
        ],
        "Storage Tank flushing": [
            "KV@-40°C in Cst  (ISO 3104)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Moisture Content",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "pH - (ASTM D1287)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Refractive Index",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "CCS @ -30 (ASTM D5293))",
            "CCS @ -15 (ASTM D5293)",
            " Water Content (ASTM D6304) (Nearest 1 ppm)",
            "Noack Volatality (ASTM D5800)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs"
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -15 (ASTM D5293)",
            " Water Content (ASTM D6304) (Nearest 1 ppm)",
            "Noack Volatality (ASTM D5800)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs"
        ],
        "Blending Kettle Flushing": [
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
        ],
        "Receipt – Additive": [
            "FTIR",
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 15.0C (Four Significant Figure)"
        ],
    },
    "Exxon Mobil": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
        ],
        "Blending Kettle Flushing": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)"
        ],
        "First Filled sample": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)"
        ],
        "Bulk Filling Tanker OUT- Blending": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)"
        ],
        "Blending- Premix": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)"
        ],
        "Blending": [
            "FTIR",
            "Rust Prevention",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Result",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Calcium",
            "Magnesium",
            "Phosphorus",
            "Zinc",
            "Average Air Release",
            "Phenolic Inhibitor (AMS 872)",
            " Filterability 1 st 100 ml,0.8µm (AMS 1082)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Average Total Acid Number",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Viscosity, MRV / Yield Stress -20C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -25C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -30C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -35C (ASTM D4684)",
            "Yield Stress, MRV -35C (ASTM D4684)",
            "Yield Stress, MRV -30C (ASTM D4684)",
            "Yield Stress, MRV -20C (ASTM D4684)",
            "Yield Stress, MRV -25C (ASTM D4684)",
            "Noack Volatality (ASTM D5800)",
            "Average Total Base Number",
            "Molybdenum",
            "HTHS @150°C (ASTM D4683)",
            "Boron",
            "Nitrogen (AMS 1208)",
            "Brookfield Viscosity @-26C (ASTM D2983)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "sulphated_ash__wt_astm_d874",
            "Sulphated Ash",
        ],
        "Receipt – Additive": [
            "FTIR"
        ],
    },
    "G S Caltex": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            // "Average Total Acid Number",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            // "Average Total Acid Number",
        ],
        "Blending Kettle Flushing": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            // "Average Density 29.5C (Four Significant Figure)",
            // "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            // "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)"
        ],
        "Receipt – Additive": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Calcium",
            "Magnesium",
            "Boron",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Average Total Base Number",
            "Average Total Acid Number",
        ],
        "Receipt – SFG": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Total Acid Number",
        ],
        "First Filled sample": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Total Acid Number",
        ],
        "Blending- Premix": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
        ],
        "Bulk Filling Tanker OUT- Blending": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Density 15.0C (Four Significant Figure)",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Boron",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Result",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "Average Total Acid Number",
            "Saponification Value (ASTM D94)",
        ],
        "Blending": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Density 15.0C (Four Significant Figure)",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Boron",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Result",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "Average Total Acid Number",
            "Saponification Value (ASTM D94)",
        ]
    },
    "Shell India Marketing Pvt. Ltd.": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 15.0C (ASTM D1298)",
            // "Average Density 15.60C (ASTM D1298)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Result",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "Average Total Acid Number",
            "Ash (ASTM D482)",
            "Sulphur (ASTM D4294)",
            "Average Air Release",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 15.0C (ASTM D1298)",
            // "Average Density 15.60C (ASTM D1298)",
            // "Average Density 29.5C (ASTM D1298)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Result",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "Average Total Acid Number",
            "Ash (ASTM D482)",
            "Sulphur (ASTM D4294)",
            "Average Air Release",
        ],
        "Blending Kettle Flushing": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)"
        ],
        "Receipt – Additive": [
            "FTIR",
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            " Water Content (ASTM D6304) (Nearest 1 ppm)",
            "Average Total Acid Number",
            "Phosphorus",
            "Silicon",
            "Sulphur",
            "Calcium",
            "Average Total Base Number",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)"
        ],
        "Receipt – SFG": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Total Acid Number",

        ],
        "Storage Tank flushing": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)"
        ],
        "First Filled sample": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Average Total Acid Number",
            "Calcium",
            "Zinc"
        ],
        "Bulk Filling Tanker OUT- Blending": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)"
        ],
        "Blending- Premix": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
        ],
        "Blending": [
            "RPVOT (ASTM D2272)",
            "FTIR",
            "Rust Prevention",
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Acid Number",
            "Average Density 15.0C (Four Significant Figure)",
            "Result",
            "Average Air Release",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Phosphorus",
            "Zinc",
            "Sulphur",
            "Calcium",
            "Boron",
            "Magnesium",
            "Silicon",
            "Lubad (LQS025)",
            " Water Content (ASTM D6304) (Nearest 1 ppm)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Demulsibility (IP 19)",
            "Filterability (Filterability factor)Stage 2 (Dry)",
            "Filterability (Filterability factor)Stage 2 (Wet)",
            "Filterability (Filterability factor)Stage 1 (Dry)",
            "Filterability (Filterability factor)Stage 1 (Wet)",
            "Average Total Base Number",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "Four Ball Weld Load (ASTM D2783)",
            "Four Ball Wear Scar (ASTM D4172)",
            "Brookfield Viscosity @ -12C (ASTM D2983) ",
            "Brookfield Viscosity @ -20C (ASTM D2983) ",
            "Brookfield Viscosity @ -40C (ASTM D2983)",
            "Brookfield Viscosity @ -55C (ASTM D2983)",
            "KRL after 48 Hrs (ASTM D445) (Four significant figure)",
            "Chlorine (ASTM D4927)",
            "Filterability Factor (TMS 371)",
            "SMS 3010",
        ]
    },
    "Valvoline Cummins (I) Pvt. Ltd.  (coolant)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - MEG": [
            "Suspended Matter (Visual)",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 15.0C (Four Significant Figure)",
            "pH - 50 % Dil.(ASTM D1287)",
            "Average Moisture Content",
            "Average Density 15.50C (Four Significant Figure)",
        ],
        "Receipt – SFG": [
            "Freezing Point 50% Dil.",
            "Freezing Point",
            "Suspended Matter (Visual)",
            "Refractive Index 20C",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH @25˚C - 10 % Dil.(ASTM D1287)",
            "pH @25˚C - 20 % Dil.(ASTM D1287)",
            "pH @25˚C - 30 % Dil.(ASTM D1287)",
            "pH @25˚C - 33 % Dil.(ASTM D1287)",
            "pH @25˚C - 50 % Dil.(ASTM D1287)",
            "Reserved Alkalinity 10 ml",
            "Reserved Alkalinity 10 gm",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            " Boiling Point 50% Dil. (ASTM D1120) (Nearest 0.3°C)",
            "Average Moisture Content",
            "Average @ 88.0 °C Tendency (T)",
            "Average @ 88.0 °C Stability (S)",
            "Replicate 1 @ 88.0 °C Tendency (T)",
            "Replicate 1 @ 88.0 °C Stability (S)",
            "Replicate 2 @ 88.0 °C Tendency (T)",
            "Replicate 2 @ 88.0 °C Stability (S)",
            "Replicate 3 @ 88.0 °C Tendency (T)",
            "Replicate 3 @ 88.0 °C Stability (S)",
            "Average @ 88.0 °C Results (T/S)",
        ],
        "Process Water": [
            "Conductivity @25°C (ISO 3696)",
            "Total Dissolve Solid  (ISO 3696)",
            "pH@25C  (ISO 3696)"
        ],
        "First Filled sample": [
            "Suspended Matter (Visual)",
            "Refractive Index 20C",
            "Average Density 29.5C (Four Significant Figure)",
            "pH @25˚C- (ASTM D1287)"
        ],
        "Storage Tank flushing": [
            "pH@25C  (ISO 3696)"
        ],
        "Blending Kettle Flushing": [
            "pH@25C  (ISO 3696)"
        ],
        "Blending- Premix": [
            "Freezing Point",
            "Suspended Matter (Visual)",
            "Refractive Index 20C",
            "pH @25˚C- (ASTM D1287)",
            "Reserved Alkalinity 10 ml"
        ],
        "Blending": [
            "Freezing Point 50% Dil.",
            "Freezing Point",
            "Suspended Matter (Visual)",
            "Refractive Index 20C",
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 15.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 15.50C (Four Significant Figure)",
            "pH @25˚C- (ASTM D1287)",
            "pH @25˚C - 10 % Dil.(ASTM D1287)",
            "pH @25˚C - 30 % Dil.(ASTM D1287)",
            "pH @25˚C - 33 % Dil.(ASTM D1287)",
            "pH @25˚C - 50 % Dil.(ASTM D1287)",
            "Reserved Alkalinity 10 ml",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            " Boiling Point 50% Dil. (ASTM D1120) (Nearest 0.3°C)",
            "Average Moisture Content",
            "Average @ 88.0 °C Tendency (T)",
            "Average @ 88.0 °C Stability (S)",
            "Replicate 1 @ 88.0 °C Tendency (T)",
            "Replicate 1 @ 88.0 °C Stability (S)",
            "Replicate 2 @ 88.0 °C Tendency (T)",
            "Replicate 2 @ 88.0 °C Stability (S)",
            "Replicate 3 @ 88.0 °C Tendency (T)",
            "Replicate 3 @ 88.0 °C Stability (S)",
            "Average @ 88.0 °C Results (T/S)",
            "Chloride Content   = (BRS-BRBXNormalityX7100)",
            "Average Density 20.0C (Four Significant Figure)",
            "Silicon (ASTM D6130)",
        ]
    },
    "Valvoline Cummins (I) Pvt. Ltd.  (Lube oil)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.50C (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)"
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.50C (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)"
        ],
        "Blending Kettle Flushing": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            // "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 15.50C (Four Significant Figure)",
            // "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            // "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)"
        ],
        "Receipt – Additive": [
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            // "Average Density 15.0C (Four Significant Figure)",
            // "Average Density 15.60C (Four Significant Figure)",
            // "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.0C (ASTM D1298)",
            "Average Density 15.60C (ASTM D1298)",
            "Average Density 29.5C (ASTM D1298)",
            // "Average Density 15.50C (Four Significant Figure)",
            "Average Total Base Number",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Boron",
            "Calcium",
            "Sulphur",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Brookfield Viscosity @ -40C (ASTM D2983)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 24.0°C Stability",
            "Sequence II @ 93.5°C Result",
            "Average Density 20.0C (Four Significant Figure)",
            "sulphated_ash__wt_astm_d874",
            "Sulphated Ash",
        ],
        "First Filled sample": [
            "TAN (ASTM D664)",
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number"
        ],
        "Blending- Premix": [
            // "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
        ],
        "Receipt – SFG": [
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Average Total Base Number",
            "Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
        ],
        "Blending": [
            "Aniline Point",
            "Refractive Index",
            "Cloud Point",
            "TAN (ASTM D664)",
            "Viscosity Index",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 15.50C (Four Significant Figure)",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Average Total Base Number",
            "Result",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Brookfield Viscosity @ -40C (ASTM D2983)",
            "Brookfield Viscosity @-26C (ASTM D2983)",
            "Brookfield Viscosity @-35C (ASTM D2983)",
            "Brookfield Viscosity @-18C (ASTM D2983)",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "Viscosity, MRV / Yield Stress -20C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -25C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -30C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -35C (ASTM D4684)",
            "Noack Volatality (ASTM D5800)",
            "HTHS @150°C (ASTM D4683)",
            "Calcium (ASTM D5185)",
            "Phosphorus (ASTM D5185)",
            "Boron (ASTM D5185)",
            "Zinc (ASTM D5185)",
            "Sulphur (ASTM D5185)",
            "Magnesium (ASTM D5185)",
            "Molybdenum (ASTM D5185)",
            "Silicon (ASTM D5185)",
            "Four Ball Weld Load (ASTM D2783)",
            "Four Ball Wear Scar (ASTM D4172)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "KRL after 48 Hrs (ASTM D445) (Four significant figure)",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "Zinc",
            "sulphated_ash__wt_astm_d874",
            "Sulphated Ash",
        ]
    },
    "Internal Client": {
        "Other": [
            "NAS (Class)",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV (Four Significant Figure)",
            "KV@-40°C in Cst  (ISO 3104)",
            "Average Viscosity Blend @ 100°C (four significant figure)",
            "Brookfield Viscosity @-26C (ASTM D2983)",
            "Brookfield Viscosity @ -12C (ASTM D2983) ",
            "Brookfield Viscosity @ -20C (ASTM D2983) ",
            "Brookfield Viscosity @ -40C (ASTM D2983)",
            "Brookfield Viscosity @ -55C (ASTM D2983)",
            "Brookfield Viscosity @-35C (ASTM D2983)",
            "Brookfield Viscosity @-18C (ASTM D2983)",
            "KV@ 100°C",
            "KV@ 40°C",
            "Viscosity Index (ASTM D2270)",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "Average Density 15.50C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average Density 20.0C (ASTM D1298)",
            "Average Density 15.50C (ASTM D1298)",
            "Average Density 15.60C (ASTM D1298)",
            "Average Density 15.0C (ASTM D1298)",
            "Average Total Base Number",
            "Average Total Acid Number",
            "TAN (ASTM D664)",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Sequence IV @ 150 °C Tendency",
            "Sequence IV @ 150 °C Stability",
            "Sequence IV @ 150 °C Result",
            "Average @ 88.0 °C Tendency (T)",
            "Average @ 88.0 °C Stability (S)",
            "Replicate 1 @ 88.0 °C Tendency (T)",
            "Replicate 1 @ 88.0 °C Stability (S)",
            "Replicate 2 @ 88.0 °C Tendency (T)",
            "Replicate 2 @ 88.0 °C Stability (S)",
            "Replicate 3 @ 88.0 °C Tendency (T)",
            "Replicate 3 @ 88.0 °C Stability (S)",
            "Average @ 88.0 °C Results (T/S)",
            "Result",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Average Air Release",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Boron",
            "Silicon",
            "Sulphur",
            "Nitrogen",
            "Titanium",
            "Boron (ASTM D5185)",
            "Calcium (ASTM D5185)",
            "Magnesium (ASTM D5185)",
            "Molybdenum (ASTM D5185)",
            "Phosphorus (ASTM D5185)",
            "Zinc (ASTM D5185)",
            "Sulphur (ASTM D5185)",
            "Silicon (ASTM D5185)",
            "Nitrogen (ASTM D5185)",
            "Titanium (ASTM D5185)",
            "Silicon (ASTM D6130)",
            "Silicate (ASTM D6130)",
            "CCS @ -10 (ASTM D5293)",
            "CCS @ -15 (ASTM D5293)",
            "CCS @ -20 (ASTM D5293)",
            "CCS @ -25 (ASTM D5293)",
            "CCS @ -30 (ASTM D5293)",
            "CCS @ -35 (ASTM D5293)",
            "Four Ball Wear Scar (ASTM D4172)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Four Ball Weld Load (ASTM D2783)",
            " Water Content (ASTM D6304) (Nearest 1 ppm)",
            "Lubad (LQS025)",
            "Chlorine (ASTM D4927)",
            "KRL after 48 Hrs (ASTM D445) (Four significant figure)",
            "Demulsibility (IP 19)",
            "Noack Volatality (ASTM D5800)",
            "HTHS @150°C (ASTM D4683)",
            "FTIR",
            "Rust Prevention",
            "Viscosity, MRV / Yield Stress -10C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -15C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -20C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -25C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -30C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -35C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -40C (ASTM D4684)",
            "Yield Stress, MRV -35C (ASTM D4684)",
            "Yield Stress, MRV -30C (ASTM D4684)",
            "Yield Stress, MRV -20C (ASTM D4684)",
            "Yield Stress, MRV -25C (ASTM D4684)",
            "RPVOT (ASTM D2272)",
            "Filterability (Filterability factor)Stage 1 (Wet)",
            "Filterability (Filterability factor)Stage 1 (Dry)",
            "Filterability (Filterability factor)Stage 2 (Wet)",
            "Filterability (Filterability factor)Stage 2 (Dry)",
            " Filterability 1 st 100 ml,0.8µm (AMS 1082)",
            "Filterability Factor (TMS 371)",
            "Phenolic Inhibitor (AMS 872)",
            "Nitrogen (AMS 1208)",
            "pH - (ASTM D1287)",
            "pH - 50 % Dil.(ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH @25˚C - 50 % Dil.(ASTM D1287)",
            "pH @25˚C - 30 % Dil.(ASTM D1287)",
            "pH @25˚C - 33 % Dil.(ASTM D1287)",
            "pH @25˚C - 10 % Dil.(ASTM D1287)",
            "pH @25˚C - 20 % Dil.(ASTM D1287)",
            "pH@25C  (ISO 3696)",
            "ERBP  (ASTM D1120) (Nearest 0.3°C)",
            "Wet ERBP (ASTM D1120) (Nearest 0.3°C)",
            "Average Moisture Content",
            "Ash (ASTM D482)",
            "sulphated_ash__wt_astm_d874",
            "Conductivity @25°C (ISO 3696)",
            "Total Dissolve Solid  (ISO 3696)",
            "Refractive Index 20C",
            "Refractive Index",
            "Reserved Alkalinity 10 ml",
            "Reserved Alkalinity 10 gm",
            "Aniline Point",
            "CA",
            "CN",
            "CP",
            "FBP",
            "IBP",
            "Dewatering Property with 3% Nacl Solution",
            "Dewatering Property with DM Water",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            " Boiling Point 50% Dil. (ASTM D1120) (Nearest 0.3°C)",
            "solubility_in_water_inhouse",
            "Suspended Matter (Visual)",
            "Freezing Point 50% Dil.",
            "Freezing Point",
            "Chloride Content   = (BRS-BRBXNormalityX7100)",
            "Sulphated Ash",
            "Cloud Point",
            "Sulphur (ASTM D4294)",
            "Refractive Index @ 20°C (ASTM D1218)",
            "SMS 3010",
            "Viscosity @ 100°C (After 120 shear cycles)",
            "Saponification Value (ASTM D94)"
        ],
    },
    "Raj Petro (Solvent)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°c)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°c)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°c)",
            "Refractive Index @ 20°C (ASTM D1218)",
            "Aniline Point",
            "CA",
            "CN",
            "CP",
            "FBP",
            "IBP",
            "Sulphur (ASTM D4294)",
        ],
        "Receipt - Base oil": [
            "Average KV@ 40°C (four significant figure)",
            "Average Density 29.5C (Four Significant Figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°c)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°c)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°c)",
            "Refractive Index @ 20°C (ASTM D1218)",
            "Aniline Point",
            "CA",
            "CN",
            "CP",
            "FBP",
            "IBP",
            "Sulphur (ASTM D4294)",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "KV@ 40°C",
        ]
    },
    "BASF (Brake Fluid)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt – SFG": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "Average Moisture Content",
            "Average KV@ 100°C (four significant figure)",
            "ERBP  (ASTM D1120) (Nearest 0.3°C)",
            "Wet ERBP (ASTM D1120) (Nearest 0.3°C)",
            "Reserved Alkalinity 10 ml",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "Average Moisture Content",
            "Average KV@ 100°C (four significant figure)",
            "ERBP  (ASTM D1120) (Nearest 0.3°C)",
            "Wet ERBP (ASTM D1120) (Nearest 0.3°C)",
            "Reserved Alkalinity 10 ml",
        ],
        "Filling Line End Sample": [
            "pH - (ASTM D1287)",
            "Average Moisture Content",
            "Average KV@ 100°C (four significant figure)",
        ]
    },
    "G S Caltex (Base Oil Trading)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Average Total Acid Number",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Average Density 29.5C (Four Significant Figure)",
            // "Average Density 29.5C (ASTM D1298)",
            "Viscosity Index",
            "Average KV@ 100°C (four significant figure)",
            "Average KV@ 40°C (four significant figure)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Average Total Acid Number",
        ]
    },
    "Raj Petro (Blending)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Average Density 29.5C (Four Significant Figure)",
            "KV@ 40°C",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "IBP",
            "FBP",
            "KV@ 100°C",
            "Aniline Point",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Sulphur (ASTM D4294)",
            "Refractive Index @ 20°C (ASTM D1218)",
            "CA",
            "CP",
            "CN",
            "Viscosity Index",
        ],
        "BK Flushing": [
            "KV@ 40°C",
            "KV@ 100°C",
        ],
        "Receipt – Additive": [
            "Average Total Acid Number",
            "Average Density 15.60C (Four Significant Figure)",
            "Average KV@ 100°C (four significant figure)",
            "Saponification Value (ASTM D94)",
            "KV@ 100°C",
            "Average Density 29.5C (Four Significant Figure)",
            "Average Total Base Number",
            "Water Content (ASTM D6304) (Nearest 1 ppm)",
            "KV@ 40°C",
            "Aniline Point",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Sulphur (ASTM D4294)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Viscosity Index",
        ],
        "Blending- Premix": [
            "Average Density 29.5C (Four Significant Figure)",
            "Dewatering Property with DM Water",
            "Dewatering Property with 3% Nacl Solution",
            "KV@ 40°C",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
        ],
        "Blending": [
            "Average Density 29.5C (Four Significant Figure)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Dewatering Property with DM Water",
            "Dewatering Property with 3% Nacl Solution",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "KV@ 40°C",
            "Refractive Index 20C",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "KV@ 40°C",
        ],
    },
    "BASF (Coolant)": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt – SFG": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH - 50 % Dil.(ASTM D1287)",
            "Refractive Index 20C",
            "Reserved Alkalinity 10 ml",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "Freezing Point",
            "Average Moisture Content",
            "Average @ 88.0 °C Tendency (T)",
            "Average @ 88.0 °C Stability (S)",
            "Replicate 1 @ 88.0 °C Tendency (T)",
            "Replicate 1 @ 88.0 °C Stability (S)",
            "Replicate 2 @ 88.0 °C Tendency (T)",
            "Replicate 2 @ 88.0 °C Stability (S)",
            "Replicate 3 @ 88.0 °C Tendency (T)",
            "Replicate 3 @ 88.0 °C Stability (S)",
            "Average @ 88.0 °C Results (T/S)",
            "Chloride Content   = (BRS-BRBXNormalityX7100)",
            "Silicate (ASTM D6130)",
        ],
        "Blending": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH - 50 % Dil.(ASTM D1287)",
            "Refractive Index 20C",
            "Reserved Alkalinity 10 ml",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "Freezing Point",
            "Average Moisture Content",
            "Silicate (ASTM D6130)",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH - 50 % Dil.(ASTM D1287)",
            "Refractive Index 20C",
            "Reserved Alkalinity 10 ml",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "Freezing Point",
            "Average Moisture Content",
        ],
        "Storage Tank flushing": [
            "pH@25C  (ISO 3696)",
        ],
        "Blending Kettle Flushing": [
            "pH@25C  (ISO 3696)",
        ],
        "Process Water": [
            "pH@25C  (ISO 3696)",
            "Conductivity @25°C (ISO 3696)",
            "Total Dissolve Solid  (ISO 3696)",
        ],
        "Finished Good Storage Tank Sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 20.0C (Four Significant Figure)",
            "Average Density 15.60C (Four Significant Figure)",
            "pH - (ASTM D1287)",
            "pH @25˚C- (ASTM D1287)",
            "pH - 50 % Dil.(ASTM D1287)",
            "Refractive Index 20C",
            "Reserved Alkalinity 10 ml",
            "Boiling Point  (ASTM D1120) (Nearest 0.3°C)",
            "Freezing Point",
            "Average Moisture Content",
            "Average @ 88.0 °C Tendency (T)",
            "Average @ 88.0 °C Stability (S)",
            "Replicate 1 @ 88.0 °C Tendency (T)",
            "Replicate 1 @ 88.0 °C Stability (S)",
            "Replicate 2 @ 88.0 °C Tendency (T)",
            "Replicate 2 @ 88.0 °C Stability (S)",
            "Replicate 3 @ 88.0 °C Tendency (T)",
            "Replicate 3 @ 88.0 °C Stability (S)",
            "Average @ 88.0 °C Results (T/S)",
            "Chloride Content   = (BRS-BRBXNormalityX7100)",
            "Silicate (ASTM D6130)",
        ],
    },
    "Petronas": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt – SFG": [
            // "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 100°C (four significant figure)",
            "Phosphorus (ASTM D5185)",
            "Sulphur (ASTM D5185)",
            "Zinc (ASTM D5185)",
            "Magnesium (ASTM D5185)",
            "Boron (ASTM D5185)",
            "Calcium (ASTM D5185)",
            "Molybdenum (ASTM D5185)",
        ],
        "Finished Good Storage Tank Sample": [
            // "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
            "Viscosity Index",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "TAN (ASTM D664)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Brookfield Viscosity @ -40C (ASTM D2983)",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Brookfield Viscosity @-26C (ASTM D2983)",
            "Phosphorus (ASTM D5185)",
            "Sulphur (ASTM D5185)",
            "Nitrogen (ASTM D5185)",
            "Viscosity @ 100°C (After 120 shear cycles)",
            "Zinc (ASTM D5185)",
            "Magnesium (ASTM D5185)",
            "CCS @ -30 (ASTM D5293)",
            "Noack Volatality (ASTM D5800)",
            "HTHS @150°C (ASTM D4683)",
            "Viscosity, MRV / Yield Stress -35C (ASTM D4684)",
            "sulphated_ash__wt_astm_d874",
            "Sulphated Ash",
            "Boron (ASTM D5185)",
            "Calcium (ASTM D5185)",
            "Molybdenum (ASTM D5185)",
            "Average Total Base Number",
        ],
        "First Filled sample": [
            // "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 100°C (four significant figure)",
            "Phosphorus (ASTM D5185)",
            "Sulphur (ASTM D5185)",
            "Zinc (ASTM D5185)",
            "Magnesium (ASTM D5185)",
            "Boron (ASTM D5185)",
            "Calcium (ASTM D5185)",
            "Molybdenum (ASTM D5185)",
            "Average KV@ 40°C (four significant figure)",
            "Result",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Phosphorus",
            "Sulphur",
        ],
        "Blending": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
            "Viscosity Index",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Average Air Release",
            "Result",
            "TAN (ASTM D664)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "Phosphorus",
            "Sulphur",
            "FTIR",
        ],
    },
    "Nynas": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Receipt - Base oil": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
        ],
        "Bulk Filling Tanker OUT - Base oil": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
        ],
        "Blending": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 15.0C (Four Significant Figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
            "Reported Flash point {C+0.033(760-P)} (Nearest 0.5°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Copper Corrosion (ASTM D130) @ 100°C for 3hrs",
            "Aniline Point",
            "Average Total Acid Number",
            "CA",
            "CN",
            "CP",
            "Refractive Index 20C",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
        ]
    },
    "ENSOOILS": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
        "Blending": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
            "Viscosity Index",
            "Reported Flash point {C+0.033(760-P)} (Nearest 1°C)",
            "Reported Pour point (Observed Pour point+3) (Nearest 1°C)",
            "Average Total Base Number",
            "Average Total Acid Number",
            "Result",
            "Average Air Release",
            "Sequence I @ 24.0°C Tendency",
            "Sequence I @ 24.0°C Stability",
            "Sequence I @ 24.0°C Result",
            "Sequence II @ 93.5°C Tendency",
            "Sequence II @ 93.5°C Stability",
            "Sequence II @ 93.5°C Result",
            "Sequence III @ 24.0°C Tendency",
            "Sequence III @ 24.0°C Stability",
            "Sequence III @ 24.0°C Result",
            "CCS @ -20 (ASTM D5293)",
            "Calcium",
            "Magnesium",
            "Molybdenum",
            "Phosphorus",
            "Zinc",
            "Boron",
            "sulphated_ash__wt_astm_d874",
            "Sulphated Ash",
            "Yield Stress, MRV -25C (ASTM D4684)",
            "Viscosity, MRV / Yield Stress -25C (ASTM D4684)",
            "ISO 4406(4 µm/6 µm/14 µm)",
            "NAS (Class)",
        ],
        "First Filled sample": [
            "Average Density 29.5C (Four Significant Figure)",
            "Average Density 29.5C (ASTM D1298)",
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
            "Average Total Base Number",
            "Average Total Acid Number",
        ],
        "Blending- Premix": [
            "Average KV@ 40°C (four significant figure)",
            "Average KV@ 100°C (four significant figure)",
        ],
    },
    "Sperry": {
        "Tanker Flushing": [
            "KV@ 100°C",
            "KV@ 40°C",
        ],
    }
};


const dataFields = {
    "Viscosity Index": "viscosity_index_astm_d2270_section",
    "KV@-40°C in Cst  (ISO 3104)": "kv_minus40c_section",
    "TAN (ASTM D664)": "total_acid_number_astm_d664_section",
    "Cloud Point": "cloud_point_astm_d2500_section",
    "Rust Prevention": "rust_prevention_astm_d665_section",
    "FTIR": "ftir_comparison_with_std_section",
    "RPVOT (ASTM D2272)": "rpvot_astm_d2272_section",
    "Total Dissolve Solid  (ISO 3696)": "coolant_section",
    "Conductivity @25°C (ISO 3696)": "conductivity__25c_iso_3696_section",
    "Refractive Index": "refract_index",
    "Refractive Index 20C": "refractive_index_20c_astm_d1747_section",
    "Aniline Point": "aniline_point_astm_d611_section",
    "Suspended Matter (Visual)": "section_break_nqnd",
    "Freezing Point": "freezing_point_astm_d3321astm_d1177_section",
    "Freezing Point 50% Dil.": "freezing_point_50_dil_astm_d3321astm_d1177_section",
    "Ash (ASTM D482)": "ash_section",
    "Dewatering Property with 3% Nacl Solution": "dewatering_property_with_3_nacl_solution_ihtp_q13_section",
    "Dewatering Property with DM Water": "dewatering_property_with_dm_water_ihtp_q13_section",
    "Sulphated Ash": "sulphated_ash_astm_d874_section",
    "Filterability Factor (TMS 371)": "filterability_factor_section",
    "Refractive Index @ 20°C (ASTM D1218)": "refractive_index_astm_d1218_section",
    "Viscosity @ 100°C (After 120 shear cycles)": "viscosity_100_deg_c_astm_d6278_section",
    "Sulphur (ASTM D4294)": "sulphur_astm_d4294_section",
    "Saponification Value (ASTM D94)": "saponification_value_astm_d94_section"
}

const dataMapping = {
    //"Raw Data Field Lable": "Sample Parameter Fieldname",
    "Viscosity Index": "viscosity_index",
    "KV@-40°C in Cst  (ISO 3104)": "kv",
    "TAN (ASTM D664)": "average_total_acid_number",
    "Cloud Point": "cloud_point_astm_d2500_c",
    "Rust Prevention": "rust_preventive_astm_d665b",
    "FTIR": "ftir_comparison_with_std",
    "RPVOT (ASTM D2272)": "rpvot_astm_d2272_min",
    "Total Dissolve Solid  (ISO 3696)": "total_dissolve_solid__iso_3696_mgl",
    "Conductivity @25°C (ISO 3696)": "conductivity_25c_iso_3696_µscm",
    "Refractive Index": "refractive_index",
    "Refractive Index 20C": "refractive_index_200c_astm_d1747",
    "Aniline Point": "aniline_point_astm_d611_c",
    "Suspended Matter (Visual)": "suspended__matter_visual",
    "Freezing Point": "freezing_point_point_astm_d3321astm_d1177_c",
    "Freezing Point 50% Dil.": "freezing_point_50_dil_astm_d3321astm_d1177",
    "Ash (ASTM D482)": "ash_astm_d482",
    "Dewatering Property with 3% Nacl Solution": "dewatering_property_with_3_nacl_solution_ihtp_q13",
    "Dewatering Property with DM Water": "dewatering_property_with_dm_water_ihtp_q13",
    "Sulphated Ash": "sulphated_ash__wt_astm_d874",
    "Filterability Factor (TMS 371)": "filterability_factor_tms_371",
    "Refractive Index @ 20°C (ASTM D1218)": "refractive_index__20c_astm_d1218",
    "Viscosity @ 100°C (After 120 shear cycles)": "viscosity__100_deg_c_astm_d6278",
    "Sulphur (ASTM D4294)": "sulphur_astm_d_4294",
    "Saponification Value (ASTM D94)": "saponification_value_astm_d94"
}

function hasRequiredData(frm) {
    return frm.doc.sample_name && frm.doc.type_of_sample && frm.doc.name_of_customer;
}

async function ensureTables(frm) {
    if (!hasRequiredData(frm) || frm.__tables_in_progress) {
        return;
    }

    frm.__tables_in_progress = true;
    try {
        await getAllTables(frm);
    } finally {
        frm.__tables_in_progress = false;
    }
}

frappe.ui.form.on("Raw Data Sample", {
    refresh: async function (frm) {
        await ensureTables(frm);

        // Only add confirm logic if the doc is not yet submitted
        if (!frm.is_new() && frm.doc.docstatus === 0) {
            // Override the standard submit button
            frm.page.set_primary_action(__('Submit'), function() {
                frappe.confirm(
                    'Are you sure you want to submit this record?',
                    function() {
                        // If confirmed, call the standard submit
                        frm.set_value('date_of_analysis_completed', frappe.datetime.now_datetime());
                        frm.save('Submit');
                    },
                    function() {
                        frappe.show_alert('Submission cancelled');
                    }
                );
            });
        }
    },
    onload_post_render: async function (frm) {
        // // Get all fields from the Doctype metadata
        const fields = frm.meta.fields;

        // console.log("---- TAB BREAKS ----");
        // // Filter fields of type "Tab Break"
        const tabBreaks = fields.filter(f => f.fieldtype === "Tab Break");
        tabBreaks.forEach(tab => {
            // console.log("Tab Label:", tab.label, "| Fieldname:", tab.fieldname);
            if (tab.fieldname === "details" && tab.fieldname === "other_tab" && frm.tabs.tabs.details) {
                $(frm.tabs.tabs.details.wrapper).show();
            } else if (frm.fields_dict[tab.fieldname]) {
                frm.fields_dict[tab.fieldname].tab.hide();
            }
        });

        // console.log("---- SECTION BREAKS ----");
        // // Filter fields of type "Section Break"
        const sectionBreaks = fields.filter(f => f.fieldtype === "Section Break");
        sectionBreaks.forEach(section => {
            // console.log("Section Label:", section.label, "| Fieldname:", section.fieldname);
            if (section.fieldname === "__section_1" || section.fieldname === "section_break_zifa" || section.fieldname === "other_1_section" || section.fieldname === "other_2_section") {
                frm.set_df_property(section.fieldname, "hidden", 0);
            }
            frm.set_df_property(section.fieldname, "hidden", 1);
        });
        await ensureTables(frm);
    },
    sample_name: async function (frm) {
        await ensureTables(frm);
        // frm.refresh_fields();

        frm.set_df_property("other_1_section", "hidden", 0);
        frm.set_df_property("other_2_section", "hidden", 0);
        frm.set_df_property("section_break_zifa", "hidden", 0);
    },
    
});

async function getAllTables(frm) {
    if (!frm.doc.sample_name || !frm.doc.type_of_sample || !frm.doc.name_of_customer) {
        return;
    }

    frm.set_df_property("other_1_section", "hidden", 0);
    frm.set_df_property("other_2_section", "hidden", 0);
    frm.set_df_property("section_break_zifa", "hidden", 0);

    const sampleType = frm.doc.type_of_sample;

    let isInternalClient = 0;

    if (frm.doc.name_of_customer) {
        const res = await frappe.db.get_value("Customer", {name: frm.doc.name_of_customer}, "custom_is_internal_client");
        if (res.message) {
            isInternalClient = res.message.custom_is_internal_client;
        }
    }



    const name_of_sample = frm.doc.sample_name;


    if (sampleType == "Other" || isInternalClient == 1 || sampleType == "Lab Blend" || sampleType == "Tanker Flushing") {
        const response = await frm.call("preload_all_tables_for_internal", {
            showFieldMap: JSON.stringify(showFieldMap)
        });

        if(sampleType == "Tanker Flushing"){
            allowedParameters = showFieldMap[frm.doc.name_of_customer][sampleType];
        }
        else{
            allowedParameters = showFieldMap["Internal Client"]["Other"];
        }

        const tableMap = response.message;

        Object.entries(tableMap).forEach(([fieldname, wasPopulated]) => {
            const field = frm.fields_dict[fieldname];
            if (!field) return;

            // ✅ Find section by scanning backwards
            const fields = frm.meta.fields;
            let sectionFieldname = null;

            const currentIndex = fields.findIndex(f => f.fieldname === fieldname);
            if (currentIndex !== -1) {
                for (let i = currentIndex - 1; i >= 0; i--) {
                    const prevField = fields[i];
                    if (prevField.fieldtype === "Section Break") {
                        sectionFieldname = prevField.fieldname;
                        break;
                    }
                }
            }

            // ✅ Unhide the table field
            frm.set_df_property(fieldname, "hidden", 0);

            // ✅ Unhide its parent section
            if (sectionFieldname) {
                // console.log(`✅ Showing section before ${fieldname}: ${sectionFieldname}`);
                frm.set_df_property(sectionFieldname, "hidden", 0);
                frm.set_df_property("other_1_section", "hidden", 0);
                frm.set_df_property("other_2_section", "hidden", 0);
                frm.set_df_property("section_break_zifa", "hidden", 0);
            }
        });

        //loop through all detaField list
        Object.keys(dataFields).forEach(field => {
            if (allowedParameters.includes(field)) {
                //check if the field value is NA or blank then hide the field
                // let sampleField = dataFields[field];
                // let sampleVal = frm.sample_para[sampleField];

                let fieldTab = dataFields[field];
                // const hide = !sampleVal || sampleVal.toLowerCase() === "na";

                frm.set_df_property(fieldTab, "hidden", 0);
            }
        })
    }
    // console.log(sampleName);

    let sampleName = "";
    if (name_of_sample) {
        const res = await frappe.db.get_value("Item", name_of_sample, "item_name");
        if (res.message) {
            sampleName = res.message.item_name;
        }
    }

    const sampleParamList = await frappe.db.get_list('Sample Parameters', {
        filters: {
            item_name: sampleName,
            sample_types: sampleType
        },
        limit: 1
    });
    if (!sampleParamList.length) {
        frappe.msgprint(`Sample Parameters not found for ${sampleName} (${sampleType})`);
        return;
    }
    const samplePara = await frappe.db.get_doc('Sample Parameters', sampleParamList[0].name);

    if (!samplePara) {
        frappe.error(`There is no record of "${sampleName}" in Sample Parameters`);
    } else {
        frm.sample_para = samplePara;
        console.log(samplePara);
    }
    const response = await frm.call("preload_all_tables", {
        samplePara: JSON.stringify(frm.sample_para),
        showFieldMap: JSON.stringify(showFieldMap)
    });

    const customerFieldMap = showFieldMap[frm.doc.name_of_customer];
    if (!customerFieldMap) {
        frappe.msgprint(`No field map configured for ${frm.doc.name_of_customer}`);
        return;
    }

    if (!customerFieldMap[frm.doc.type_of_sample]) {
        frappe.msgprint(`No field map configured for sample type ${frm.doc.type_of_sample}`);
        return;
    }

    allowedParameters = customerFieldMap[frm.doc.type_of_sample];

    const tableMap = response.message;

    // console.log(tableMap);

    // Step 4: Populate and show only relevant tables
    Object.entries(tableMap).forEach(([fieldname, wasPopulated]) => {
        const field = frm.fields_dict[fieldname];
        if (!field) return;

        // ✅ Find section by scanning backwards
        const fields = frm.meta.fields;
        let sectionFieldname = null;

        const currentIndex = fields.findIndex(f => f.fieldname === fieldname);
        if (currentIndex !== -1) {
            for (let i = currentIndex - 1; i >= 0; i--) {
                const prevField = fields[i];
                if (prevField.fieldtype === "Section Break") {
                    sectionFieldname = prevField.fieldname;
                    break;
                }
            }
        }

        // ✅ Unhide the table field
        frm.set_df_property(fieldname, "hidden", 0);

        // ✅ Unhide its parent section
        if (sectionFieldname) {
            // console.log(`✅ Showing section before ${fieldname}: ${sectionFieldname}`);
            frm.set_df_property(sectionFieldname, "hidden", 0);
            frm.set_df_property("other_1_section", "hidden", 0);
            frm.set_df_property("other_2_section", "hidden", 0);
            frm.set_df_property("section_break_zifa", "hidden", 0);
        }
    });

    //loop through all detaField list
    Object.keys(dataFields).forEach(field => {
        if (allowedParameters.includes(field)) {
            //check if the field value is NA or blank then hide the field
            let sampleField = dataMapping[field];
            let sampleVal = frm.sample_para[sampleField];

            let fieldTab = dataFields[field];
            const hide = !sampleVal || sampleVal.toLowerCase() === "na";

            frm.set_df_property(fieldTab, "hidden", hide ? 1 : 0);

            if(!hide){
                frm.set_df_property("other_1_section", "hidden", 0);
                frm.set_df_property("other_2_section", "hidden", 0);
                frm.set_df_property("section_break_zifa", "hidden", 0);
            }
        }
    })


};