import "@testing-library/jest-dom/extend-expect";
import fetch from "isomorphic-fetch";
import { randomUUID } from "node:crypto";

global.fetch = fetch;

window.crypto.randomUUID = randomUUID;
