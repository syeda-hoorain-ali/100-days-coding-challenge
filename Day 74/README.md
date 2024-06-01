## 🚀 Day 74 Challenge: Mastering TypeScript Debugging! 🚀

## Contents
- [Debugging in TypeScript](#debugging-in-typescript)

## Debugging in TypeScript

Today, we'll learn how to debug TypeScript code effectively. Debugging is crucial for identifying and fixing errors in your code. This guide covers setting up a debugging environment, using console logs, breakpoints, and integrating with tools like Visual Studio Code for an enhanced debugging experience.

### Instructions

1. **Enable Source Maps:** Open `tsconfig.json`. In the `compilerOptions` section, set `"sourceMap": true`.

2. **Recompile Code:** Compile your code again to generate the `index.js.map` file.

3. **Add Breakpoints:** Open `index.ts`. Click on the line number to add a breakpoint.

4. **Configure Debugging:** Open the debug panel in VS Code. Create a `launch.json` file and select `Node.js` from the dropdown.

5. **Set Pre-launch Task:** In `launch.json`, add a `"preLaunchTask": "tsc: build - tsconfig.json"` setting.

6. **Start Debugging:** Go back to `index.ts`. Open the debug panel and click "Launch Program" or press `F5`.

7. **Debugging Tools:**
   - Use **Step Over (F10)** to execute the next line.
   - Use **Step Into** to enter functions.
   - Use **Step Out** to leave functions.
   - Use **Restart** to restart the session.
   - Use **Stop** to end debugging.

8. **Watch Variables:** Check the "Variables" section on the left to see variable values. Add variables to the "Watch" window if needed.

9. **Start Debugging:** Add `console.log` statements in your code. Start debugging with `F5` and use `F10` to step through lines.


## References
- [Debugging in TypeScript](https://github.com/AsharibAli/100-days-of-code/tree/main/day-74/TS-debugging)

---
