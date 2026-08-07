import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator.ts";
import { runAskMode } from "./ask/orchestrator.ts";
import { runPlanMode } from "./plan/orchestrator.ts";


export async function runCliMode() {
    while (true) {
        const mode = await select({
            message: "Select cli mode",
            options: [
                {value: "agent", label: "Agent Mode"},
                {value: "plan", label: "Plan Mode"},
                {value: "ask", label: "Ask Mode"},
                {value: "back", label: "Back to Main Menu"},
            ],
        });

        if(isCancel(mode) || mode === "back") return;

        if(mode === "agent") {
            await runAgentMode();
        }
        if(mode === "plan") {
            await runPlanMode();
        }
        if(mode === "ask") {
            await runAskMode();
        }


        if (mode !== "agent" && mode !== "plan" && mode !== "ask") {
         console.log(chalk.yellow("\nThat mode is not implemented yet.\n"));
        }
    }
}