var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_criteria_pb=require("../../../../../google/ads/googleads/v4/common/criteria_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_criteria_pb);var google_ads_googleads_v4_common_extensions_pb=require("../../../../../google/ads/googleads/v4/common/extensions_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_extensions_pb);var google_ads_googleads_v4_enums_extension_type_pb=require("../../../../../google/ads/googleads/v4/enums/extension_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_extension_type_pb);var google_ads_googleads_v4_enums_feed_item_status_pb=require("../../../../../google/ads/googleads/v4/enums/feed_item_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_feed_item_status_pb);var google_ads_googleads_v4_enums_feed_item_target_device_pb=require("../../../../../google/ads/googleads/v4/enums/feed_item_target_device_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_feed_item_target_device_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.ExtensionFeedItem",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.ExtensionFeedItem.ExtensionCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.ExtensionFeedItem.ServingResourceTargetingCase",null,global),proto.google.ads.googleads.v4.resources.ExtensionFeedItem=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.repeatedFields_,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.resources.ExtensionFeedItem,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.ExtensionFeedItem.displayName="proto.google.ads.googleads.v4.resources.ExtensionFeedItem"),proto.google.ads.googleads.v4.resources.ExtensionFeedItem.repeatedFields_=[16],proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_=[[2,3,7,8,9,10,11,12,14,15,23],[18,19]],proto.google.ads.googleads.v4.resources.ExtensionFeedItem.ExtensionCase={EXTENSION_NOT_SET:0,SITELINK_FEED_ITEM:2,STRUCTURED_SNIPPET_FEED_ITEM:3,APP_FEED_ITEM:7,CALL_FEED_ITEM:8,CALLOUT_FEED_ITEM:9,TEXT_MESSAGE_FEED_ITEM:10,PRICE_FEED_ITEM:11,PROMOTION_FEED_ITEM:12,LOCATION_FEED_ITEM:14,AFFILIATE_LOCATION_FEED_ITEM:15,HOTEL_CALLOUT_FEED_ITEM:23},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getExtensionCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0])},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.ServingResourceTargetingCase={SERVING_RESOURCE_TARGETING_NOT_SET:0,TARGETED_CAMPAIGN:18,TARGETED_AD_GROUP:19},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getServingResourceTargetingCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[1])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.ExtensionFeedItem.toObject(e,this)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.toObject=function(e,o){var t,s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(t=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,t),extensionType:jspb.Message.getFieldWithDefault(o,13,0),startDateTime:(t=o.getStartDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(e,t),endDateTime:(t=o.getEndDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(e,t),adSchedulesList:jspb.Message.toObjectList(o.getAdSchedulesList(),google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.toObject,e),device:jspb.Message.getFieldWithDefault(o,17,0),targetedGeoTargetConstant:(t=o.getTargetedGeoTargetConstant())&&google_protobuf_wrappers_pb.StringValue.toObject(e,t),targetedKeyword:(t=o.getTargetedKeyword())&&google_ads_googleads_v4_common_criteria_pb.KeywordInfo.toObject(e,t),status:jspb.Message.getFieldWithDefault(o,4,0),sitelinkFeedItem:(t=o.getSitelinkFeedItem())&&google_ads_googleads_v4_common_extensions_pb.SitelinkFeedItem.toObject(e,t),structuredSnippetFeedItem:(t=o.getStructuredSnippetFeedItem())&&google_ads_googleads_v4_common_extensions_pb.StructuredSnippetFeedItem.toObject(e,t),appFeedItem:(t=o.getAppFeedItem())&&google_ads_googleads_v4_common_extensions_pb.AppFeedItem.toObject(e,t),callFeedItem:(t=o.getCallFeedItem())&&google_ads_googleads_v4_common_extensions_pb.CallFeedItem.toObject(e,t),calloutFeedItem:(t=o.getCalloutFeedItem())&&google_ads_googleads_v4_common_extensions_pb.CalloutFeedItem.toObject(e,t),textMessageFeedItem:(t=o.getTextMessageFeedItem())&&google_ads_googleads_v4_common_extensions_pb.TextMessageFeedItem.toObject(e,t),priceFeedItem:(t=o.getPriceFeedItem())&&google_ads_googleads_v4_common_extensions_pb.PriceFeedItem.toObject(e,t),promotionFeedItem:(t=o.getPromotionFeedItem())&&google_ads_googleads_v4_common_extensions_pb.PromotionFeedItem.toObject(e,t),locationFeedItem:(t=o.getLocationFeedItem())&&google_ads_googleads_v4_common_extensions_pb.LocationFeedItem.toObject(e,t),affiliateLocationFeedItem:(t=o.getAffiliateLocationFeedItem())&&google_ads_googleads_v4_common_extensions_pb.AffiliateLocationFeedItem.toObject(e,t),hotelCalloutFeedItem:(t=o.getHotelCalloutFeedItem())&&google_ads_googleads_v4_common_extensions_pb.HotelCalloutFeedItem.toObject(e,t),targetedCampaign:(t=o.getTargetedCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(e,t),targetedAdGroup:(t=o.getTargetedAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(e,t)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.resources.ExtensionFeedItem.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.resources.ExtensionFeedItem;return proto.google.ads.googleads.v4.resources.ExtensionFeedItem.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setResourceName(t);break;case 24:t=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(t,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(t);break;case 13:t=o.readEnum();e.setExtensionType(t);break;case 5:t=new google_protobuf_wrappers_pb.StringValue;o.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setStartDateTime(t);break;case 6:t=new google_protobuf_wrappers_pb.StringValue;o.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setEndDateTime(t);break;case 16:t=new google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo;o.readMessage(t,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.deserializeBinaryFromReader),e.addAdSchedules(t);break;case 17:t=o.readEnum();e.setDevice(t);break;case 20:t=new google_protobuf_wrappers_pb.StringValue;o.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTargetedGeoTargetConstant(t);break;case 22:t=new google_ads_googleads_v4_common_criteria_pb.KeywordInfo;o.readMessage(t,google_ads_googleads_v4_common_criteria_pb.KeywordInfo.deserializeBinaryFromReader),e.setTargetedKeyword(t);break;case 4:t=o.readEnum();e.setStatus(t);break;case 2:t=new google_ads_googleads_v4_common_extensions_pb.SitelinkFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.SitelinkFeedItem.deserializeBinaryFromReader),e.setSitelinkFeedItem(t);break;case 3:t=new google_ads_googleads_v4_common_extensions_pb.StructuredSnippetFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.StructuredSnippetFeedItem.deserializeBinaryFromReader),e.setStructuredSnippetFeedItem(t);break;case 7:t=new google_ads_googleads_v4_common_extensions_pb.AppFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.AppFeedItem.deserializeBinaryFromReader),e.setAppFeedItem(t);break;case 8:t=new google_ads_googleads_v4_common_extensions_pb.CallFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.CallFeedItem.deserializeBinaryFromReader),e.setCallFeedItem(t);break;case 9:t=new google_ads_googleads_v4_common_extensions_pb.CalloutFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.CalloutFeedItem.deserializeBinaryFromReader),e.setCalloutFeedItem(t);break;case 10:t=new google_ads_googleads_v4_common_extensions_pb.TextMessageFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.TextMessageFeedItem.deserializeBinaryFromReader),e.setTextMessageFeedItem(t);break;case 11:t=new google_ads_googleads_v4_common_extensions_pb.PriceFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.PriceFeedItem.deserializeBinaryFromReader),e.setPriceFeedItem(t);break;case 12:t=new google_ads_googleads_v4_common_extensions_pb.PromotionFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.PromotionFeedItem.deserializeBinaryFromReader),e.setPromotionFeedItem(t);break;case 14:t=new google_ads_googleads_v4_common_extensions_pb.LocationFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.LocationFeedItem.deserializeBinaryFromReader),e.setLocationFeedItem(t);break;case 15:t=new google_ads_googleads_v4_common_extensions_pb.AffiliateLocationFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.AffiliateLocationFeedItem.deserializeBinaryFromReader),e.setAffiliateLocationFeedItem(t);break;case 23:t=new google_ads_googleads_v4_common_extensions_pb.HotelCalloutFeedItem;o.readMessage(t,google_ads_googleads_v4_common_extensions_pb.HotelCalloutFeedItem.deserializeBinaryFromReader),e.setHotelCalloutFeedItem(t);break;case 18:t=new google_protobuf_wrappers_pb.StringValue;o.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTargetedCampaign(t);break;case 19:t=new google_protobuf_wrappers_pb.StringValue;o.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTargetedAdGroup(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.ExtensionFeedItem.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getResourceName()).length&&o.writeString(1,t),null!=(t=e.getId())&&o.writeMessage(24,t,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(t=e.getExtensionType())&&o.writeEnum(13,t),null!=(t=e.getStartDateTime())&&o.writeMessage(5,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=e.getEndDateTime())&&o.writeMessage(6,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(t=e.getAdSchedulesList()).length&&o.writeRepeatedMessage(16,t,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.serializeBinaryToWriter),0!==(t=e.getDevice())&&o.writeEnum(17,t),null!=(t=e.getTargetedGeoTargetConstant())&&o.writeMessage(20,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=e.getTargetedKeyword())&&o.writeMessage(22,t,google_ads_googleads_v4_common_criteria_pb.KeywordInfo.serializeBinaryToWriter),0!==(t=e.getStatus())&&o.writeEnum(4,t),null!=(t=e.getSitelinkFeedItem())&&o.writeMessage(2,t,google_ads_googleads_v4_common_extensions_pb.SitelinkFeedItem.serializeBinaryToWriter),null!=(t=e.getStructuredSnippetFeedItem())&&o.writeMessage(3,t,google_ads_googleads_v4_common_extensions_pb.StructuredSnippetFeedItem.serializeBinaryToWriter),null!=(t=e.getAppFeedItem())&&o.writeMessage(7,t,google_ads_googleads_v4_common_extensions_pb.AppFeedItem.serializeBinaryToWriter),null!=(t=e.getCallFeedItem())&&o.writeMessage(8,t,google_ads_googleads_v4_common_extensions_pb.CallFeedItem.serializeBinaryToWriter),null!=(t=e.getCalloutFeedItem())&&o.writeMessage(9,t,google_ads_googleads_v4_common_extensions_pb.CalloutFeedItem.serializeBinaryToWriter),null!=(t=e.getTextMessageFeedItem())&&o.writeMessage(10,t,google_ads_googleads_v4_common_extensions_pb.TextMessageFeedItem.serializeBinaryToWriter),null!=(t=e.getPriceFeedItem())&&o.writeMessage(11,t,google_ads_googleads_v4_common_extensions_pb.PriceFeedItem.serializeBinaryToWriter),null!=(t=e.getPromotionFeedItem())&&o.writeMessage(12,t,google_ads_googleads_v4_common_extensions_pb.PromotionFeedItem.serializeBinaryToWriter),null!=(t=e.getLocationFeedItem())&&o.writeMessage(14,t,google_ads_googleads_v4_common_extensions_pb.LocationFeedItem.serializeBinaryToWriter),null!=(t=e.getAffiliateLocationFeedItem())&&o.writeMessage(15,t,google_ads_googleads_v4_common_extensions_pb.AffiliateLocationFeedItem.serializeBinaryToWriter),null!=(t=e.getHotelCalloutFeedItem())&&o.writeMessage(23,t,google_ads_googleads_v4_common_extensions_pb.HotelCalloutFeedItem.serializeBinaryToWriter),null!=(t=e.getTargetedCampaign())&&o.writeMessage(18,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=e.getTargetedAdGroup())&&o.writeMessage(19,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,24)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setId=function(e){return jspb.Message.setWrapperField(this,24,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasId=function(){return null!=jspb.Message.getField(this,24)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getExtensionType=function(){return jspb.Message.getFieldWithDefault(this,13,0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setExtensionType=function(e){return jspb.Message.setProto3EnumField(this,13,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getStartDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setStartDateTime=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearStartDateTime=function(){return this.setStartDateTime(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasStartDateTime=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getEndDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setEndDateTime=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearEndDateTime=function(){return this.setEndDateTime(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasEndDateTime=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getAdSchedulesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo,16)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setAdSchedulesList=function(e){return jspb.Message.setRepeatedWrapperField(this,16,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.addAdSchedules=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,16,e,proto.google.ads.googleads.v4.common.AdScheduleInfo,o)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearAdSchedulesList=function(){return this.setAdSchedulesList([])},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getDevice=function(){return jspb.Message.getFieldWithDefault(this,17,0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setDevice=function(e){return jspb.Message.setProto3EnumField(this,17,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getTargetedGeoTargetConstant=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,20)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setTargetedGeoTargetConstant=function(e){return jspb.Message.setWrapperField(this,20,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearTargetedGeoTargetConstant=function(){return this.setTargetedGeoTargetConstant(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasTargetedGeoTargetConstant=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getTargetedKeyword=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.KeywordInfo,22)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setTargetedKeyword=function(e){return jspb.Message.setWrapperField(this,22,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearTargetedKeyword=function(){return this.setTargetedKeyword(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasTargetedKeyword=function(){return null!=jspb.Message.getField(this,22)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,4,e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getSitelinkFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.SitelinkFeedItem,2)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setSitelinkFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearSitelinkFeedItem=function(){return this.setSitelinkFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasSitelinkFeedItem=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getStructuredSnippetFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.StructuredSnippetFeedItem,3)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setStructuredSnippetFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,3,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearStructuredSnippetFeedItem=function(){return this.setStructuredSnippetFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasStructuredSnippetFeedItem=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getAppFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.AppFeedItem,7)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setAppFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,7,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearAppFeedItem=function(){return this.setAppFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasAppFeedItem=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getCallFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.CallFeedItem,8)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setCallFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearCallFeedItem=function(){return this.setCallFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasCallFeedItem=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getCalloutFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.CalloutFeedItem,9)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setCalloutFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,9,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearCalloutFeedItem=function(){return this.setCalloutFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasCalloutFeedItem=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getTextMessageFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.TextMessageFeedItem,10)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setTextMessageFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,10,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearTextMessageFeedItem=function(){return this.setTextMessageFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasTextMessageFeedItem=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getPriceFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.PriceFeedItem,11)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setPriceFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,11,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearPriceFeedItem=function(){return this.setPriceFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasPriceFeedItem=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getPromotionFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.PromotionFeedItem,12)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setPromotionFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,12,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearPromotionFeedItem=function(){return this.setPromotionFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasPromotionFeedItem=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getLocationFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.LocationFeedItem,14)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setLocationFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,14,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearLocationFeedItem=function(){return this.setLocationFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasLocationFeedItem=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getAffiliateLocationFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.AffiliateLocationFeedItem,15)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setAffiliateLocationFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,15,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearAffiliateLocationFeedItem=function(){return this.setAffiliateLocationFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasAffiliateLocationFeedItem=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getHotelCalloutFeedItem=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_extensions_pb.HotelCalloutFeedItem,23)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setHotelCalloutFeedItem=function(e){return jspb.Message.setOneofWrapperField(this,23,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearHotelCalloutFeedItem=function(){return this.setHotelCalloutFeedItem(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasHotelCalloutFeedItem=function(){return null!=jspb.Message.getField(this,23)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getTargetedCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,18)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setTargetedCampaign=function(e){return jspb.Message.setOneofWrapperField(this,18,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[1],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearTargetedCampaign=function(){return this.setTargetedCampaign(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasTargetedCampaign=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.getTargetedAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,19)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.setTargetedAdGroup=function(e){return jspb.Message.setOneofWrapperField(this,19,proto.google.ads.googleads.v4.resources.ExtensionFeedItem.oneofGroups_[1],e)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.clearTargetedAdGroup=function(){return this.setTargetedAdGroup(void 0)},proto.google.ads.googleads.v4.resources.ExtensionFeedItem.prototype.hasTargetedAdGroup=function(){return null!=jspb.Message.getField(this,19)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);