var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.RegionCodeError",null,global),proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.displayName="proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum;return proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.RegionCodeErrorEnum.RegionCodeError={UNSPECIFIED:0,UNKNOWN:1,INVALID_REGION_CODE:2},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);