"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var SettingsControllers_1 = require("./controllers/SettingsControllers");
var routes = express_1.Router();
exports.routes = routes;
var settingsController = new SettingsControllers_1.SettingsController();
routes.post("/settings", settingsController.create);
