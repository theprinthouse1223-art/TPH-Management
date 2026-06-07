const PREFIX = {
    MUG: "MG",
    FRAME: "FR",
    SHIRT: "TS",
    KEYCHAIN: "KC",
    BOTTLE: "BT",
    RAW: "RM"
};

export function generateSKU(category, id) {

    const prefix = PREFIX[category] || "PR";

    return prefix + "-" +
        String(id).padStart(6, "0");

}