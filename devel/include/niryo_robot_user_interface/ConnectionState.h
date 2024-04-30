// Generated by gencpp from file niryo_robot_user_interface/ConnectionState.msg
// DO NOT EDIT!


#ifndef NIRYO_ROBOT_USER_INTERFACE_MESSAGE_CONNECTIONSTATE_H
#define NIRYO_ROBOT_USER_INTERFACE_MESSAGE_CONNECTIONSTATE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace niryo_robot_user_interface
{
template <class ContainerAllocator>
struct ConnectionState_
{
  typedef ConnectionState_<ContainerAllocator> Type;

  ConnectionState_()
    : uuid()
    , state()  {
    }
  ConnectionState_(const ContainerAllocator& _alloc)
    : uuid(_alloc)
    , state(_alloc)  {
  (void)_alloc;
    }



   typedef std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> _uuid_type;
  _uuid_type uuid;

   typedef std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> _state_type;
  _state_type state;



// reducing the odds to have name collisions with Windows.h 
#if defined(_WIN32) && defined(connection)
  #undef connection
#endif
#if defined(_WIN32) && defined(ok)
  #undef ok
#endif
#if defined(_WIN32) && defined(close)
  #undef close
#endif


  static const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> connection;
  static const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> ok;
  static const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> close;

  typedef boost::shared_ptr< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> const> ConstPtr;

}; // struct ConnectionState_

typedef ::niryo_robot_user_interface::ConnectionState_<std::allocator<void> > ConnectionState;

typedef boost::shared_ptr< ::niryo_robot_user_interface::ConnectionState > ConnectionStatePtr;
typedef boost::shared_ptr< ::niryo_robot_user_interface::ConnectionState const> ConnectionStateConstPtr;

// constants requiring out of line definition

   
   template<typename ContainerAllocator> const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>
      ConnectionState_<ContainerAllocator>::connection =
        
          "CONNECTION"
        
        ;
   

   
   template<typename ContainerAllocator> const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>
      ConnectionState_<ContainerAllocator>::ok =
        
          "OK"
        
        ;
   

   
   template<typename ContainerAllocator> const std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>
      ConnectionState_<ContainerAllocator>::close =
        
          "CLOSE"
        
        ;
   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator1> & lhs, const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator2> & rhs)
{
  return lhs.uuid == rhs.uuid &&
    lhs.state == rhs.state;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator1> & lhs, const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace niryo_robot_user_interface

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
{
  static const char* value()
  {
    return "07c91713c4d83e797d2b1ee36fd8e8ed";
  }

  static const char* value(const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x07c91713c4d83e79ULL;
  static const uint64_t static_value2 = 0x7d2b1ee36fd8e8edULL;
};

template<class ContainerAllocator>
struct DataType< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
{
  static const char* value()
  {
    return "niryo_robot_user_interface/ConnectionState";
  }

  static const char* value(const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
{
  static const char* value()
  {
    return "string connection = CONNECTION\n"
"string ok = OK\n"
"string close = CLOSE\n"
"\n"
"string uuid\n"
"string state\n"
;
  }

  static const char* value(const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.uuid);
      stream.next(m.state);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ConnectionState_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::niryo_robot_user_interface::ConnectionState_<ContainerAllocator>& v)
  {
    s << indent << "uuid: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>>::stream(s, indent + "  ", v.uuid);
    s << indent << "state: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>>::stream(s, indent + "  ", v.state);
  }
};

} // namespace message_operations
} // namespace ros

#endif // NIRYO_ROBOT_USER_INTERFACE_MESSAGE_CONNECTIONSTATE_H