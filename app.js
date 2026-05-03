console.log("APP LOADED");
document.addEventListener("DOMContentLoaded", async () => {
    const el = document.getElementById("output");

    try {
        const res = await fetch("./skills_board.txt");
        const text = await res.text();

        const lines = text.split("\n");

        el.innerHTML = "";

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;

            // CATEGORY (LEVEL 3)
            if (line.startsWith("#")) {

                el.innerHTML += `
                    <div style="
                        color:#00ff99;
                        font-size:28px;
                        font-weight:800;
                        margin-top:18px;
                        margin-bottom:6px;
                        text-transform:uppercase;
                    ">
                        ${line.replace("#","").trim()}
                    </div>
                `;
            }

            // ITEM (LEVEL 4)
            else {

                el.innerHTML += `
                    <div style="
                        color:#ffff66;
                        font-size:18px;
                        padding-left:20px;
                        line-height:1.6;
                    ">
                        ${line}
                    </div>
                `;
            }
        }

    } catch (e) {
        console.error(e);
        el.innerHTML = "FAILED TO LOAD DATA";
    }
});
