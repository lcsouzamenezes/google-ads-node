var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.TopicConstant",null,global),proto.google.ads.googleads.v4.resources.TopicConstant=function(o){jspb.Message.initialize(this,o,0,-1,proto.google.ads.googleads.v4.resources.TopicConstant.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.resources.TopicConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.TopicConstant.displayName="proto.google.ads.googleads.v4.resources.TopicConstant"),proto.google.ads.googleads.v4.resources.TopicConstant.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.TopicConstant.prototype.toObject=function(o){return proto.google.ads.googleads.v4.resources.TopicConstant.toObject(o,this)},proto.google.ads.googleads.v4.resources.TopicConstant.toObject=function(o,e){var t,r={resourceName:jspb.Message.getFieldWithDefault(e,1,""),id:(t=e.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(o,t),topicConstantParent:(t=e.getTopicConstantParent())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t),pathList:jspb.Message.toObjectList(e.getPathList(),google_protobuf_wrappers_pb.StringValue.toObject,o)};return o&&(r.$jspbMessageInstance=e),r}),proto.google.ads.googleads.v4.resources.TopicConstant.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.resources.TopicConstant;return proto.google.ads.googleads.v4.resources.TopicConstant.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.resources.TopicConstant.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=e.readString();o.setResourceName(t);break;case 2:t=new google_protobuf_wrappers_pb.Int64Value;e.readMessage(t,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),o.setId(t);break;case 3:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setTopicConstantParent(t);break;case 4:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.addPath(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.TopicConstant.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.resources.TopicConstant.serializeBinaryToWriter=function(o,e){var t=void 0;0<(t=o.getResourceName()).length&&e.writeString(1,t),null!=(t=o.getId())&&e.writeMessage(2,t,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(t=o.getTopicConstantParent())&&e.writeMessage(3,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(t=o.getPathList()).length&&e.writeRepeatedMessage(4,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.setResourceName=function(o){return jspb.Message.setProto3StringField(this,1,o)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.setId=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.getTopicConstantParent=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.setTopicConstantParent=function(o){return jspb.Message.setWrapperField(this,3,o)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.clearTopicConstantParent=function(){return this.setTopicConstantParent(void 0)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.hasTopicConstantParent=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.getPathList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.setPathList=function(o){return jspb.Message.setRepeatedWrapperField(this,4,o)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.addPath=function(o,e){return jspb.Message.addToRepeatedWrapperField(this,4,o,proto.google.protobuf.StringValue,e)},proto.google.ads.googleads.v4.resources.TopicConstant.prototype.clearPathList=function(){return this.setPathList([])},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);