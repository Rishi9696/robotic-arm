// Generated by gencpp from file niryo_robot_msgs/SetString.msg
// DO NOT EDIT!


#ifndef NIRYO_ROBOT_MSGS_MESSAGE_SETSTRING_H
#define NIRYO_ROBOT_MSGS_MESSAGE_SETSTRING_H

#include <ros/service_traits.h>


#include <niryo_robot_msgs/SetStringRequest.h>
#include <niryo_robot_msgs/SetStringResponse.h>


namespace niryo_robot_msgs
{

struct SetString
{

typedef SetStringRequest Request;
typedef SetStringResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct SetString
} // namespace niryo_robot_msgs


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::niryo_robot_msgs::SetString > {
  static const char* value()
  {
    return "f84b476c9d85e5a277125fce9822f626";
  }

  static const char* value(const ::niryo_robot_msgs::SetString&) { return value(); }
};

template<>
struct DataType< ::niryo_robot_msgs::SetString > {
  static const char* value()
  {
    return "niryo_robot_msgs/SetString";
  }

  static const char* value(const ::niryo_robot_msgs::SetString&) { return value(); }
};


// service_traits::MD5Sum< ::niryo_robot_msgs::SetStringRequest> should match
// service_traits::MD5Sum< ::niryo_robot_msgs::SetString >
template<>
struct MD5Sum< ::niryo_robot_msgs::SetStringRequest>
{
  static const char* value()
  {
    return MD5Sum< ::niryo_robot_msgs::SetString >::value();
  }
  static const char* value(const ::niryo_robot_msgs::SetStringRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::niryo_robot_msgs::SetStringRequest> should match
// service_traits::DataType< ::niryo_robot_msgs::SetString >
template<>
struct DataType< ::niryo_robot_msgs::SetStringRequest>
{
  static const char* value()
  {
    return DataType< ::niryo_robot_msgs::SetString >::value();
  }
  static const char* value(const ::niryo_robot_msgs::SetStringRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::niryo_robot_msgs::SetStringResponse> should match
// service_traits::MD5Sum< ::niryo_robot_msgs::SetString >
template<>
struct MD5Sum< ::niryo_robot_msgs::SetStringResponse>
{
  static const char* value()
  {
    return MD5Sum< ::niryo_robot_msgs::SetString >::value();
  }
  static const char* value(const ::niryo_robot_msgs::SetStringResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::niryo_robot_msgs::SetStringResponse> should match
// service_traits::DataType< ::niryo_robot_msgs::SetString >
template<>
struct DataType< ::niryo_robot_msgs::SetStringResponse>
{
  static const char* value()
  {
    return DataType< ::niryo_robot_msgs::SetString >::value();
  }
  static const char* value(const ::niryo_robot_msgs::SetStringResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // NIRYO_ROBOT_MSGS_MESSAGE_SETSTRING_H