var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.ReachPlanAdLength",null,global),proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.displayName="proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum;return proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.ReachPlanAdLengthEnum.ReachPlanAdLength={UNSPECIFIED:0,UNKNOWN:1,SIX_SECONDS:2,FIFTEEN_OR_TWENTY_SECONDS:3,TWENTY_SECONDS_OR_MORE:4},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);