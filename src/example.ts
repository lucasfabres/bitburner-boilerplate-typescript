import { helloWorld } from "./hello-world";

export async function main(ns: NS) {
  ns.tprint(helloWorld());
}
