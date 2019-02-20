/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.type.TimeOfDay', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.type.TimeOfDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.type.TimeOfDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.type.TimeOfDay.displayName = 'proto.google.type.TimeOfDay';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.type.TimeOfDay.prototype.toObject = function(opt_includeInstance) {
  return proto.google.type.TimeOfDay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.type.TimeOfDay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.TimeOfDay.toObject = function(includeInstance, msg) {
  var f, obj = {
    hours: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minutes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.type.TimeOfDay}
 */
proto.google.type.TimeOfDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.type.TimeOfDay;
  return proto.google.type.TimeOfDay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.type.TimeOfDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.type.TimeOfDay}
 */
proto.google.type.TimeOfDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHours(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.type.TimeOfDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.type.TimeOfDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.type.TimeOfDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.TimeOfDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHours();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinutes();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 hours = 1;
 * @return {number}
 */
proto.google.type.TimeOfDay.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.type.TimeOfDay.prototype.setHours = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 minutes = 2;
 * @return {number}
 */
proto.google.type.TimeOfDay.prototype.getMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.type.TimeOfDay.prototype.setMinutes = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 seconds = 3;
 * @return {number}
 */
proto.google.type.TimeOfDay.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.type.TimeOfDay.prototype.setSeconds = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 nanos = 4;
 * @return {number}
 */
proto.google.type.TimeOfDay.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.type.TimeOfDay.prototype.setNanos = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.google.type);