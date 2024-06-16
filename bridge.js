var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
var RemoteControl = /** @class */ (function () {
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.togglePower = function () {
        if (this.device.isEnabled()) {
            this.device.disable();
            return "RemoteControl: Turning off the device.";
        }
        else {
            this.device.enable();
            return "RemoteControl: Turning on the device.";
        }
    };
    RemoteControl.prototype.volumeUp = function () {
        var volume = this.device.getVolume();
        this.device.setVolume(volume + 10);
        return "RemoteControl: Increasing volume to ".concat(this.device.getVolume(), ".");
    };
    RemoteControl.prototype.volumeDown = function () {
        var volume = this.device.getVolume();
        this.device.setVolume(volume - 10);
        return "RemoteControl: Decreasing volume to ".concat(this.device.getVolume(), ".");
    };
    return RemoteControl;
}());
/**
 * You can extend the Abstraction without changing the Implementation classes.
 */
var AdvancedRemoteControl = /** @class */ (function (_super) {
    __extends(AdvancedRemoteControl, _super);
    function AdvancedRemoteControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedRemoteControl.prototype.mute = function () {
        this.device.setVolume(0);
        return "AdvancedRemoteControl: Muting the device.";
    };
    return AdvancedRemoteControl;
}(RemoteControl));
/**
 * Each Concrete Implementation corresponds to a specific device and
 * implements the Device interface using that device's API.
 */
var TV = /** @class */ (function () {
    function TV() {
        this.enabled = false;
        this.volume = 50;
    }
    TV.prototype.isEnabled = function () {
        return this.enabled;
    };
    TV.prototype.enable = function () {
        this.enabled = true;
    };
    TV.prototype.disable = function () {
        this.enabled = false;
    };
    TV.prototype.getVolume = function () {
        return this.volume;
    };
    TV.prototype.setVolume = function (volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    };
    return TV;
}());
var Radio = /** @class */ (function () {
    function Radio() {
        this.enabled = false;
        this.volume = 30;
    }
    Radio.prototype.isEnabled = function () {
        return this.enabled;
    };
    Radio.prototype.enable = function () {
        this.enabled = true;
    };
    Radio.prototype.disable = function () {
        this.enabled = false;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.setVolume = function (volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    };
    return Radio;
}());
/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
function clientCode(remote) {
    console.log(remote.togglePower());
    console.log(remote.volumeUp());
    console.log(remote.volumeDown());
    console.log(remote.volumeDown());
}
console.log("Client: Testing TV remote control...");
var tvRemote = new RemoteControl(new TV());
clientCode(tvRemote);
console.log("");
console.log("Client: Testing Radio remote control...");
var radioRemote = new AdvancedRemoteControl(new Radio());
clientCode(radioRemote);
//# sourceMappingURL=bridge.js.map