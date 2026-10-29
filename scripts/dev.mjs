// Accept the optional preview runner's host/port arguments while keeping Next.js portable.
import { spawn } from 'node:child_process';
const args = process.argv.slice(2);
const value = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; };
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--webpack', '--hostname', value('--host') || value('--hostname') || '0.0.0.0', '--port', value('--port') || process.env.PORT || '3000'], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 1));
