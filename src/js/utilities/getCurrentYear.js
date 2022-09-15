import render from "./render";

const currentYear = new Date().getFullYear();

render(`&copy; ${currentYear} TTS. All Rights Reserved.`, ".copyright");
