// Auto-generated. Do not edit!

// (in-package niryo_robot_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class CommandStatus {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.val = null;
    }
    else {
      if (initObj.hasOwnProperty('val')) {
        this.val = initObj.val
      }
      else {
        this.val = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CommandStatus
    // Serialize message field [val]
    bufferOffset = _serializer.int32(obj.val, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CommandStatus
    let len;
    let data = new CommandStatus(null);
    // Deserialize message field [val]
    data.val = _deserializer.int32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'niryo_robot_msgs/CommandStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6e77aa3752958b447895f4f64d2f4fcd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 val
    
    # overall behavior
    int32 SUCCESS = 1
    int32 CANCELLED = 2
    int32 PREEMPTED = 3
    int32 REJECTED = 4
    int32 NO_CONNECTION = 5
    int32 GOAL_TIMEOUT = 6
    
    
    int32 FAILURE = -1
    int32 ABORTED = -3
    int32 STOPPED = -4
    
    int32 BAD_HARDWARE_VERSION = -10
    int32 ROS_ERROR = -20
    
    int32 FILE_ALREADY_EXISTS = -30
    int32 FILE_NOT_FOUND = -31
    
    
    int32 UNKNOWN_COMMAND = -50
    int32 NOT_IMPLEMENTED_COMMAND = -51
    int32 INVALID_PARAMETERS = -52
    
    # - Hardware
    int32 HARDWARE_FAILURE = -110
    int32 HARDWARE_NOT_OK = -111
    int32 LEARNING_MODE_ON = -112
    int32 CALIBRATION_NOT_DONE = -113
    int32 DIGITAL_IO_PANEL_ERROR = -114
    int32 LED_MANAGER_ERROR = -115
    int32 BUTTON_ERROR = -116
    int32 WRONG_MOTOR_TYPE = -117
    int32 TTL_WRITE_ERROR = -118
    int32 TTL_READ_ERROR = -119
    int32 CAN_WRITE_ERROR = -120
    int32 CAN_READ_ERROR = -121
    int32 NO_CONVEYOR_LEFT = -122
    int32 NO_CONVEYOR_FOUND = -123
    int32 CONVEYOR_ID_INVALID = -124
    int32 CALIBRATION_IN_PROGRESS = -125
    
    # - Vision
    int32 VIDEO_STREAM_ON_OFF_FAILURE = -170
    int32 VIDEO_STREAM_NOT_RUNNING = -171
    int32 OBJECT_NOT_FOUND = -172
    int32 MARKERS_NOT_FOUND = -173
    
    # - Commander
    # Arm Commander
    int32 ARM_COMMANDER_FAILURE = -220
    int32 GOAL_STILL_ACTIVE = -221
    int32 JOG_CONTROLLER_ENABLED = -222
    int32 CONTROLLER_PROBLEMS = -223
    int32 SHOULD_RESTART = -224
    int32 JOG_CONTROLLER_FAILURE = -225
    
    int32 COLLISION = -226
    
    int32 PAUSE_TIMEOUT= -227
    int32 CANCEL_PAUSE= -228
    
    int32 PLAN_FAILED = -230
    int32 NO_PLAN_AVAILABLE = -231
    int32 INVERT_KINEMATICS_FAILURE = -232
    
    # Tool Commander
    int32 TOOL_FAILURE = -251
    int32 TOOL_ID_INVALID = -252
    int32 TOOL_NOT_CONNECTED = -253
    int32 TOOL_ROS_INTERFACE_ERROR = -254
    
    # - Pose Handlers
    int32 POSES_HANDLER_CREATION_FAILED = -300
    int32 POSES_HANDLER_REMOVAL_FAILED = -301
    int32 POSES_HANDLER_READ_FAILURE = -302
    int32 POSES_HANDLER_COMPUTE_FAILURE = -303
    
    int32 DYNAMIC_FRAME_EDIT_FAILED = -305
    int32 DYNAMIC_FRAME_CREATION_FAILED = -306
    int32 CONVERT_FAILED = -307
    
    int32 WORKSPACE_CREATION_FAILED = -308
    
    # - Trajectory Handler
    int32 TRAJECTORY_HANDLER_CREATION_FAILED = -310
    int32 TRAJECTORY_HANDLER_REMOVAL_FAILED = -311
    int32 TRAJECTORY_HANDLER_RENAME_FAILURE = -312
    int32 TRAJECTORY_HANDLER_EXECUTE_REGISTERED_FAILURE = -313
    int32 TRAJECTORY_HANDLER_EXECUTE_FAILURE = -314
    int32 TRAJECTORY_HANDLER_GET_TRAJECTORY_FAILURE = -315
    int32 TRAJECTORY_HANDLER_GET_TRAJECTORY_LIST_FAILURE = -316
    
    # - Programs Manager
    int32 PROGRAMS_MANAGER_FAILURE = -320
    int32 PROGRAMS_MANAGER_READ_FAILURE = -321
    int32 PROGRAMS_MANAGER_UNKNOWN_LANGUAGE = -325
    int32 PROGRAMS_MANAGER_NOT_RUNNABLE_LANGUAGE = -326
    int32 PROGRAMS_MANAGER_EXECUTION_FAILED = -327
    int32 PROGRAMS_MANAGER_STOPPING_FAILED = -328
    int32 PROGRAMS_MANAGER_AUTORUN_FAILURE = -329
    int32 PROGRAMS_MANAGER_WRITING_FAILURE = -330
    int32 PROGRAMS_MANAGER_FILE_ALREADY_EXISTS = -331
    int32 PROGRAMS_MANAGER_FILE_DOES_NOT_EXIST = -332
    
    
    # - Credentials
    int32 CREDENTIALS_FILE_ERROR = -400
    int32 CREDENTIALS_UNKNOWN_ERROR = -401
    
    # - System Api Client
    int32 SYSTEM_API_CLIENT_UNKNOWN_ERROR = -440
    int32 SYSTEM_API_CLIENT_INVALID_ROBOT_NAME = -441
    int32 SYSTEM_API_CLIENT_REQUEST_FAILED = -442
    int32 SYSTEM_API_CLIENT_UNKNOWN_COMMAND = -443
    int32 SYSTEM_API_CLIENT_COMMAND_FAILED = -444
    
    # - Database
    int32 DATABASE_DB_ERROR = -460
    int32 DATABASE_SETTINGS_UNKNOWN = -461
    int32 DATABASE_SETTINGS_TYPE_MISMATCH = -462
    int32 DATABASE_FILE_PATH_UNKNOWN = -463
    
    
    # - Reports
    int32 REPORTS_UNABLE_TO_SEND = -470
    int32 REPORTS_SENDING_FAIL = -471
    int32 REPORTS_FETCHING_FAIL = -472
    int32 REPORTS_SERVICE_UNREACHABLE = -473
    
    # - Sound interface
    int32 SOUND_FILE_NOT_FOUND = -500
    int32 PROTECTED_SOUND_NAME = -501
    int32 INVALID_SOUND_NAME = -502
    int32 INVALID_SOUND_FORMAT = -503
    int32 SOUND_TIMEOUT = -504
    
    # - I2C interface
    int32 MISSING_I2C = -510
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CommandStatus(null);
    if (msg.val !== undefined) {
      resolved.val = msg.val;
    }
    else {
      resolved.val = 0
    }

    return resolved;
    }
};

// Constants for message
CommandStatus.Constants = {
  SUCCESS: 1,
  CANCELLED: 2,
  PREEMPTED: 3,
  REJECTED: 4,
  NO_CONNECTION: 5,
  GOAL_TIMEOUT: 6,
  FAILURE: -1,
  ABORTED: -3,
  STOPPED: -4,
  BAD_HARDWARE_VERSION: -10,
  ROS_ERROR: -20,
  FILE_ALREADY_EXISTS: -30,
  FILE_NOT_FOUND: -31,
  UNKNOWN_COMMAND: -50,
  NOT_IMPLEMENTED_COMMAND: -51,
  INVALID_PARAMETERS: -52,
  HARDWARE_FAILURE: -110,
  HARDWARE_NOT_OK: -111,
  LEARNING_MODE_ON: -112,
  CALIBRATION_NOT_DONE: -113,
  DIGITAL_IO_PANEL_ERROR: -114,
  LED_MANAGER_ERROR: -115,
  BUTTON_ERROR: -116,
  WRONG_MOTOR_TYPE: -117,
  TTL_WRITE_ERROR: -118,
  TTL_READ_ERROR: -119,
  CAN_WRITE_ERROR: -120,
  CAN_READ_ERROR: -121,
  NO_CONVEYOR_LEFT: -122,
  NO_CONVEYOR_FOUND: -123,
  CONVEYOR_ID_INVALID: -124,
  CALIBRATION_IN_PROGRESS: -125,
  VIDEO_STREAM_ON_OFF_FAILURE: -170,
  VIDEO_STREAM_NOT_RUNNING: -171,
  OBJECT_NOT_FOUND: -172,
  MARKERS_NOT_FOUND: -173,
  ARM_COMMANDER_FAILURE: -220,
  GOAL_STILL_ACTIVE: -221,
  JOG_CONTROLLER_ENABLED: -222,
  CONTROLLER_PROBLEMS: -223,
  SHOULD_RESTART: -224,
  JOG_CONTROLLER_FAILURE: -225,
  COLLISION: -226,
  PAUSE_TIMEOUT: -227,
  CANCEL_PAUSE: -228,
  PLAN_FAILED: -230,
  NO_PLAN_AVAILABLE: -231,
  INVERT_KINEMATICS_FAILURE: -232,
  TOOL_FAILURE: -251,
  TOOL_ID_INVALID: -252,
  TOOL_NOT_CONNECTED: -253,
  TOOL_ROS_INTERFACE_ERROR: -254,
  POSES_HANDLER_CREATION_FAILED: -300,
  POSES_HANDLER_REMOVAL_FAILED: -301,
  POSES_HANDLER_READ_FAILURE: -302,
  POSES_HANDLER_COMPUTE_FAILURE: -303,
  DYNAMIC_FRAME_EDIT_FAILED: -305,
  DYNAMIC_FRAME_CREATION_FAILED: -306,
  CONVERT_FAILED: -307,
  WORKSPACE_CREATION_FAILED: -308,
  TRAJECTORY_HANDLER_CREATION_FAILED: -310,
  TRAJECTORY_HANDLER_REMOVAL_FAILED: -311,
  TRAJECTORY_HANDLER_RENAME_FAILURE: -312,
  TRAJECTORY_HANDLER_EXECUTE_REGISTERED_FAILURE: -313,
  TRAJECTORY_HANDLER_EXECUTE_FAILURE: -314,
  TRAJECTORY_HANDLER_GET_TRAJECTORY_FAILURE: -315,
  TRAJECTORY_HANDLER_GET_TRAJECTORY_LIST_FAILURE: -316,
  PROGRAMS_MANAGER_FAILURE: -320,
  PROGRAMS_MANAGER_READ_FAILURE: -321,
  PROGRAMS_MANAGER_UNKNOWN_LANGUAGE: -325,
  PROGRAMS_MANAGER_NOT_RUNNABLE_LANGUAGE: -326,
  PROGRAMS_MANAGER_EXECUTION_FAILED: -327,
  PROGRAMS_MANAGER_STOPPING_FAILED: -328,
  PROGRAMS_MANAGER_AUTORUN_FAILURE: -329,
  PROGRAMS_MANAGER_WRITING_FAILURE: -330,
  PROGRAMS_MANAGER_FILE_ALREADY_EXISTS: -331,
  PROGRAMS_MANAGER_FILE_DOES_NOT_EXIST: -332,
  CREDENTIALS_FILE_ERROR: -400,
  CREDENTIALS_UNKNOWN_ERROR: -401,
  SYSTEM_API_CLIENT_UNKNOWN_ERROR: -440,
  SYSTEM_API_CLIENT_INVALID_ROBOT_NAME: -441,
  SYSTEM_API_CLIENT_REQUEST_FAILED: -442,
  SYSTEM_API_CLIENT_UNKNOWN_COMMAND: -443,
  SYSTEM_API_CLIENT_COMMAND_FAILED: -444,
  DATABASE_DB_ERROR: -460,
  DATABASE_SETTINGS_UNKNOWN: -461,
  DATABASE_SETTINGS_TYPE_MISMATCH: -462,
  DATABASE_FILE_PATH_UNKNOWN: -463,
  REPORTS_UNABLE_TO_SEND: -470,
  REPORTS_SENDING_FAIL: -471,
  REPORTS_FETCHING_FAIL: -472,
  REPORTS_SERVICE_UNREACHABLE: -473,
  SOUND_FILE_NOT_FOUND: -500,
  PROTECTED_SOUND_NAME: -501,
  INVALID_SOUND_NAME: -502,
  INVALID_SOUND_FORMAT: -503,
  SOUND_TIMEOUT: -504,
  MISSING_I2C: -510,
}

module.exports = CommandStatus;
