var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_advertising_channel_sub_type_pb=require("../../../../../google/ads/googleads/v4/enums/advertising_channel_sub_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_advertising_channel_sub_type_pb);var google_ads_googleads_v4_enums_advertising_channel_type_pb=require("../../../../../google/ads/googleads/v4/enums/advertising_channel_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_advertising_channel_type_pb);var google_ads_googleads_v4_enums_criterion_category_channel_availability_mode_pb=require("../../../../../google/ads/googleads/v4/enums/criterion_category_channel_availability_mode_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_criterion_category_channel_availability_mode_pb);var google_ads_googleads_v4_enums_criterion_category_locale_availability_mode_pb=require("../../../../../google/ads/googleads/v4/enums/criterion_category_locale_availability_mode_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_criterion_category_locale_availability_mode_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.CriterionCategoryAvailability",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability",null,global),proto.google.ads.googleads.v4.common.CriterionCategoryAvailability=function(o){jspb.Message.initialize(this,o,0,-1,proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.common.CriterionCategoryAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.displayName="proto.google.ads.googleads.v4.common.CriterionCategoryAvailability"),proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability=function(o){jspb.Message.initialize(this,o,0,-1,proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.displayName="proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability"),proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.displayName="proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability"),proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.toObject(o,this)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.toObject=function(o,e){var a,t={channel:(a=e.getChannel())&&proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.toObject(o,a),localeList:jspb.Message.toObjectList(e.getLocaleList(),proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.toObject,o)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.common.CriterionCategoryAvailability;return proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var a=new proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability;e.readMessage(a,proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader),o.setChannel(a);break;case 2:a=new proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability;e.readMessage(a,proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader),o.addLocale(a);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.serializeBinaryToWriter=function(o,e){var a=void 0;null!=(a=o.getChannel())&&e.writeMessage(1,a,proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter),0<(a=o.getLocaleList()).length&&e.writeRepeatedMessage(2,a,proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.getChannel=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability,1)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.setChannel=function(o){return jspb.Message.setWrapperField(this,1,o)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.clearChannel=function(){return this.setChannel(void 0)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.hasChannel=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.getLocaleList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability,2)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.setLocaleList=function(o){return jspb.Message.setRepeatedWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.addLocale=function(o,e){return jspb.Message.addToRepeatedWrapperField(this,2,o,proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability,e)},proto.google.ads.googleads.v4.common.CriterionCategoryAvailability.prototype.clearLocaleList=function(){return this.setLocaleList([])},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.toObject(o,this)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.toObject=function(o,e){var a,t={availabilityMode:jspb.Message.getFieldWithDefault(e,1,0),advertisingChannelType:jspb.Message.getFieldWithDefault(e,2,0),advertisingChannelSubTypeList:null==(a=jspb.Message.getRepeatedField(e,3))?void 0:a,includeDefaultChannelSubType:(a=e.getIncludeDefaultChannelSubType())&&google_protobuf_wrappers_pb.BoolValue.toObject(o,a)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability;return proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var a=e.readEnum();o.setAvailabilityMode(a);break;case 2:a=e.readEnum();o.setAdvertisingChannelType(a);break;case 3:a=e.readPackedEnum();o.setAdvertisingChannelSubTypeList(a);break;case 4:a=new google_protobuf_wrappers_pb.BoolValue;e.readMessage(a,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),o.setIncludeDefaultChannelSubType(a);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter=function(o,e){var a=void 0;0!==(a=o.getAvailabilityMode())&&e.writeEnum(1,a),0!==(a=o.getAdvertisingChannelType())&&e.writeEnum(2,a),0<(a=o.getAdvertisingChannelSubTypeList()).length&&e.writePackedEnum(3,a),null!=(a=o.getIncludeDefaultChannelSubType())&&e.writeMessage(4,a,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.getAvailabilityMode=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.setAvailabilityMode=function(o){return jspb.Message.setProto3EnumField(this,1,o)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.getAdvertisingChannelType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.setAdvertisingChannelType=function(o){return jspb.Message.setProto3EnumField(this,2,o)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.getAdvertisingChannelSubTypeList=function(){return jspb.Message.getRepeatedField(this,3)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.setAdvertisingChannelSubTypeList=function(o){return jspb.Message.setField(this,3,o||[])},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.addAdvertisingChannelSubType=function(o,e){return jspb.Message.addToRepeatedField(this,3,o,e)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.clearAdvertisingChannelSubTypeList=function(){return this.setAdvertisingChannelSubTypeList([])},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.getIncludeDefaultChannelSubType=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,4)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.setIncludeDefaultChannelSubType=function(o){return jspb.Message.setWrapperField(this,4,o)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.clearIncludeDefaultChannelSubType=function(){return this.setIncludeDefaultChannelSubType(void 0)},proto.google.ads.googleads.v4.common.CriterionCategoryChannelAvailability.prototype.hasIncludeDefaultChannelSubType=function(){return null!=jspb.Message.getField(this,4)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.toObject(o,this)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.toObject=function(o,e){var a,t={availabilityMode:jspb.Message.getFieldWithDefault(e,1,0),countryCode:(a=e.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(o,a),languageCode:(a=e.getLanguageCode())&&google_protobuf_wrappers_pb.StringValue.toObject(o,a)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability;return proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var a=e.readEnum();o.setAvailabilityMode(a);break;case 2:a=new google_protobuf_wrappers_pb.StringValue;e.readMessage(a,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setCountryCode(a);break;case 3:a=new google_protobuf_wrappers_pb.StringValue;e.readMessage(a,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setLanguageCode(a);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter=function(o,e){var a=void 0;0!==(a=o.getAvailabilityMode())&&e.writeEnum(1,a),null!=(a=o.getCountryCode())&&e.writeMessage(2,a,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(a=o.getLanguageCode())&&e.writeMessage(3,a,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.getAvailabilityMode=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.setAvailabilityMode=function(o){return jspb.Message.setProto3EnumField(this,1,o)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.setCountryCode=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.clearCountryCode=function(){return this.setCountryCode(void 0)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.getLanguageCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.setLanguageCode=function(o){return jspb.Message.setWrapperField(this,3,o)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.clearLanguageCode=function(){return this.setLanguageCode(void 0)},proto.google.ads.googleads.v4.common.CriterionCategoryLocaleAvailability.prototype.hasLanguageCode=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);