/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.IM = (function() {

    /**
     * Namespace IM.
     * @exports IM
     * @namespace
     */
    var IM = {};

    IM.ImMessage = (function() {

        /**
         * Properties of an ImMessage.
         * @memberof IM
         * @interface IImMessage
         * @property {string|null} [name] ImMessage name
         * @property {string|null} [words] ImMessage words
         */

        /**
         * Constructs a new ImMessage.
         * @memberof IM
         * @classdesc Represents an ImMessage.
         * @implements IImMessage
         * @constructor
         * @param {IM.IImMessage=} [properties] Properties to set
         */
        function ImMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImMessage name.
         * @member {string} name
         * @memberof IM.ImMessage
         * @instance
         */
        ImMessage.prototype.name = "";

        /**
         * ImMessage words.
         * @member {string} words
         * @memberof IM.ImMessage
         * @instance
         */
        ImMessage.prototype.words = "";

        /**
         * Creates a new ImMessage instance using the specified properties.
         * @function create
         * @memberof IM.ImMessage
         * @static
         * @param {IM.IImMessage=} [properties] Properties to set
         * @returns {IM.ImMessage} ImMessage instance
         */
        ImMessage.create = function create(properties) {
            return new ImMessage(properties);
        };

        /**
         * Encodes the specified ImMessage message. Does not implicitly {@link IM.ImMessage.verify|verify} messages.
         * @function encode
         * @memberof IM.ImMessage
         * @static
         * @param {IM.IImMessage} message ImMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.words != null && message.hasOwnProperty("words"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.words);
            return writer;
        };

        /**
         * Encodes the specified ImMessage message, length delimited. Does not implicitly {@link IM.ImMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IM.ImMessage
         * @static
         * @param {IM.IImMessage} message ImMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImMessage message from the specified reader or buffer.
         * @function decode
         * @memberof IM.ImMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IM.ImMessage} ImMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IM.ImMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.words = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IM.ImMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IM.ImMessage} ImMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImMessage message.
         * @function verify
         * @memberof IM.ImMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.words != null && message.hasOwnProperty("words"))
                if (!$util.isString(message.words))
                    return "words: string expected";
            return null;
        };

        /**
         * Creates an ImMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IM.ImMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IM.ImMessage} ImMessage
         */
        ImMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.IM.ImMessage)
                return object;
            var message = new $root.IM.ImMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.words != null)
                message.words = String(object.words);
            return message;
        };

        /**
         * Creates a plain object from an ImMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IM.ImMessage
         * @static
         * @param {IM.ImMessage} message ImMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.words = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.words != null && message.hasOwnProperty("words"))
                object.words = message.words;
            return object;
        };

        /**
         * Converts this ImMessage to JSON.
         * @function toJSON
         * @memberof IM.ImMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImMessage;
    })();

    return IM;
})();

module.exports = $root;
