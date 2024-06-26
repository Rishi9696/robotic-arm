; Auto-generated. Do not edit!


(cl:in-package niryo_robot_rpi-msg)


;//! \htmlinclude StorageStatus.msg.html

(cl:defclass <StorageStatus> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (log_size
    :reader log_size
    :initarg :log_size
    :type cl:integer
    :initform 0)
   (available_disk_size
    :reader available_disk_size
    :initarg :available_disk_size
    :type cl:integer
    :initform 0)
   (total_disk_size
    :reader total_disk_size
    :initarg :total_disk_size
    :type cl:integer
    :initform 0)
   (purge_log_on_startup
    :reader purge_log_on_startup
    :initarg :purge_log_on_startup
    :type cl:boolean
    :initform cl:nil))
)

(cl:defclass StorageStatus (<StorageStatus>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <StorageStatus>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'StorageStatus)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name niryo_robot_rpi-msg:<StorageStatus> is deprecated: use niryo_robot_rpi-msg:StorageStatus instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <StorageStatus>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader niryo_robot_rpi-msg:header-val is deprecated.  Use niryo_robot_rpi-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'log_size-val :lambda-list '(m))
(cl:defmethod log_size-val ((m <StorageStatus>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader niryo_robot_rpi-msg:log_size-val is deprecated.  Use niryo_robot_rpi-msg:log_size instead.")
  (log_size m))

(cl:ensure-generic-function 'available_disk_size-val :lambda-list '(m))
(cl:defmethod available_disk_size-val ((m <StorageStatus>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader niryo_robot_rpi-msg:available_disk_size-val is deprecated.  Use niryo_robot_rpi-msg:available_disk_size instead.")
  (available_disk_size m))

(cl:ensure-generic-function 'total_disk_size-val :lambda-list '(m))
(cl:defmethod total_disk_size-val ((m <StorageStatus>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader niryo_robot_rpi-msg:total_disk_size-val is deprecated.  Use niryo_robot_rpi-msg:total_disk_size instead.")
  (total_disk_size m))

(cl:ensure-generic-function 'purge_log_on_startup-val :lambda-list '(m))
(cl:defmethod purge_log_on_startup-val ((m <StorageStatus>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader niryo_robot_rpi-msg:purge_log_on_startup-val is deprecated.  Use niryo_robot_rpi-msg:purge_log_on_startup instead.")
  (purge_log_on_startup m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <StorageStatus>) ostream)
  "Serializes a message object of type '<StorageStatus>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let* ((signed (cl:slot-value msg 'log_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'available_disk_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'total_disk_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'purge_log_on_startup) 1 0)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <StorageStatus>) istream)
  "Deserializes a message object of type '<StorageStatus>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'log_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'available_disk_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'total_disk_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:setf (cl:slot-value msg 'purge_log_on_startup) (cl:not (cl:zerop (cl:read-byte istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<StorageStatus>)))
  "Returns string type for a message object of type '<StorageStatus>"
  "niryo_robot_rpi/StorageStatus")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'StorageStatus)))
  "Returns string type for a message object of type 'StorageStatus"
  "niryo_robot_rpi/StorageStatus")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<StorageStatus>)))
  "Returns md5sum for a message object of type '<StorageStatus>"
  "4a32e6a51c4baf6bc5bc5d0713d2b149")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'StorageStatus)))
  "Returns md5sum for a message object of type 'StorageStatus"
  "4a32e6a51c4baf6bc5bc5d0713d2b149")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<StorageStatus>)))
  "Returns full string definition for message of type '<StorageStatus>"
  (cl:format cl:nil "std_msgs/Header header~%~%# in MB~%int32 log_size ~%int32 available_disk_size~%int32 total_disk_size~%bool purge_log_on_startup~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'StorageStatus)))
  "Returns full string definition for message of type 'StorageStatus"
  (cl:format cl:nil "std_msgs/Header header~%~%# in MB~%int32 log_size ~%int32 available_disk_size~%int32 total_disk_size~%bool purge_log_on_startup~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <StorageStatus>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     4
     4
     4
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <StorageStatus>))
  "Converts a ROS message object to a list"
  (cl:list 'StorageStatus
    (cl:cons ':header (header msg))
    (cl:cons ':log_size (log_size msg))
    (cl:cons ':available_disk_size (available_disk_size msg))
    (cl:cons ':total_disk_size (total_disk_size msg))
    (cl:cons ':purge_log_on_startup (purge_log_on_startup msg))
))
