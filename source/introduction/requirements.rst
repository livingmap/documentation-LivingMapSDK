Requirements
============

.. contents::
    :depth: 1
    :local:


Whitelisted IP Access
---------------------

Access to *LivingMapSDK* is restricted to whitelisted IP addresses. To add your IP address to the whitelist, contact Living Map via the :doc:`../support/support-desk`. Please allow up to 1 working day for the request to be processed.


Software
--------

*LivingMapSDK* operates on Android and iOS platforms of a specified minimum version (see table below), and up to and including the latest version. Requirements for a particular minimum version may be due to the availability of certain OS APIs that allow access to sensor hardware data.

+------------------------+------------------+-------------------------+------------------+------------------+
|                        | Minimum Supported Versions                 | Maximum Supported Versions          |
+------------------------+------------------+-------------------------+------------------+------------------+
| SDK Version            | iOS              | Android                 | iOS              | Android          |
+========================+==================+=========================+==================+==================+
| 10.0                   | 11.0             | 7.0 Nougat (API 24)     | Latest           | Latest           |
+------------------------+------------------+-------------------------+------------------+------------------+


Hardware
--------

* Android or iOS mobile device, capable of running the minimum software requirements.
* Bluetooth (used for Beacon positioning).
* Wi-Fi (used for indoor positioning).
* GPS (used for outdoor positioning).
* An active internet connection (either cellular or wi-fi for downloading maps and data).

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.