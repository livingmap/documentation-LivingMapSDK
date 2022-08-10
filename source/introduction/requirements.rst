Requirements
============

.. contents::
    :depth: 2
    :local:


Authentication
---------------------

Access to *LivingMapSDK* is restricted to by authentication token. To request an authentication token, contact Living Map via the :doc:`../support/support-desk`. Please allow up to 5 working days for the request to be processed.


Software Platforms
------------------

*LivingMapSDK* operates on Android and iOS platforms of a specified minimum version, and up-to-and-including the latest versions. Requirements for a particular minimum version may be due to the availability of certain OS APIs that allow access to sensor hardware data. 

The minimum/maximum version indicates the version of Android and iOS platforms on which a particular version of the *LivingMapSDK* has been tested. The version of the *LivingMapSDK* in question *could* operate on a older or newer versions of Android or iOS, but without guarantees. 

To ensure complete compatibility for the latest versions of Android and iOS, it is recommended to upgrade the integrated version of the *LivingMapSDK* to the latest tested version as soon as possible within integrating applications.


*LivingMapSDK* will be tested as compatible for the latest 3 *public* versions of the Android and iOS platforms. When a new version is announced and released, Living Map will test and deploy a new version of the *LivingMapSDK* which is confirmed as compatible. Old versions of the *LivingMapSDK* *may* operate the newer version of the Android and iOS platforms, but without guarantees. Release Notes for the newer version will indicate if there have been any changes that could affect backwards- or forwards-compatibility. If there are any critical changes, vendors will be directly notified by Living Map.

.. attention:: **Operation on Legacy OS Platforms** – The *LivingMapSDK* will **not** restrict itself in operating on platforms which are not supported; this will be the integrating application's responsibility. 


Android Compatibility (as tested)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

+------------------------+--------------------------+----------------------------+
| *LivingMapSDK* Version | Minimum Android Version  | Maximum Android Version    |
+========================+==========================+============================+
| 11.2.0                 | 9 Pie                    | Android 12                 |
+------------------------+--------------------------+----------------------------+
| 10.3                   | 8.0 Oreo                 | Android 11                 |
+------------------------+--------------------------+----------------------------+
| 10.2                   | 8.0 Oreo                 | Android 11                 |
+------------------------+--------------------------+----------------------------+
| 10.1 (retired)         | 7.0 Nougat               | Android 11                 |
+------------------------+--------------------------+----------------------------+
| 10.0 (retired)         | 6.0 Marshmallow          | 9 Pie                      |
+------------------------+--------------------------+----------------------------+


iOS Compatibility (as tested)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

+------------------------+--------------------------+----------------------------+
| *LivingMapSDK* Version | Minimum iOS Version      | Maximum iOS Version        |
+========================+==========================+============================+
| 11.0 (TBA)             | iOS 13                   | iOS 15                     |
+------------------------+--------------------------+----------------------------+
| 10.3                   | iOS 12                   | iOS 14                     |
+------------------------+--------------------------+----------------------------+
| 10.2                   | iOS 12                   | iOS 14                     |
+------------------------+--------------------------+----------------------------+
| 10.1 (retired)         | iOS 11                   | iOS 13                     |
+------------------------+--------------------------+----------------------------+
| 10.0 (retired)         | iOS 10                   | iOS 13                     |
+------------------------+--------------------------+----------------------------+





Device Hardware
---------------

The LivingMapSDK requires the following hardware features and sensors for operating correctly on an Android or iOS mobile device:

+------------------------+----------------------------------------------------------------+
| Feature / Sensor       | Required For                                                   |
+========================+================================================================+
| Magnetometer (Compass) | Used for Mag-based Indoor Positioning.                         |
+------------------------+----------------------------------------------------------------+
| Bluetooth              | Used for Beacon-based Indoor Positioning                       |                    
+------------------------+----------------------------------------------------------------+
| Wi-Fi                  | Used for CoreLocation and to aid Mag-based Indoor Positioning. |
+------------------------+----------------------------------------------------------------+
| GPS                    | Used for Outdoor Positioning and compass calibration.          | 
+------------------------+----------------------------------------------------------------+
| Barometer              | Used for detecting floor change events.                        | 
+------------------------+----------------------------------------------------------------+
| Internet Connection    | Used for downloading map data.                                 |
+------------------------+----------------------------------------------------------------+


.. attention:: **Missing Features/Sensors** – The *LivingMapSDK* will **not** restrict itself in operating on platforms which do not meet hardware requirements; this will be the integrating application's responsibility. 


Legacy Hardware Support
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

As a recommendation, *LivingMapSDK* aims to support devices which have been released in the past 4 years (as well as meeting the hardware requirements for features/sensors). The *LivingMapSDK* *may* operate adequately on older devices, but without guarantees.


.. attention:: **Older Hardware** – The *LivingMapSDK* will **not** restrict itself in operating on platforms older than our legacy hardware support recommendations; this will be the integrating application's responsibility, potentially based on a number of factors such as processor speed and/or available memory.


Granted Permissions
^^^^^^^^^^^^^^^^^^^

Access to certain device sensors (e.g. Bluetooth, GPS) requires gaining explicit permissions by the end-user. Gaining this permission is an Application-level requirement and if permissions are not granted by the user, then the positioning system may not operate correctly.


Screen Orientations
^^^^^^^^^^^^^^^^^^^

Only **portrait-mode** is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the *LivingMapSDK* and use Mapping must ensure it is locked to Portrait-mode through its configuration.