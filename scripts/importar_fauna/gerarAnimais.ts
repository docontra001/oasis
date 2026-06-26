import fs from "fs";
import path from "path";

export default function Fauna() {

    const arquivo = path.join(
        process.cwd(),
        "saida",
        "animais.json"
    );

    return (
        <main className="p-10 text-white">
            {arquivo}
        </main>
    );
}