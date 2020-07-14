Installation on Android
=======================

.. contents::
    :depth: 2
    :local:

This page will outline how to install the *LivingMapSDK* into an Android application.


Dependencies
------------

Android dependencies are managed via the *Living Map Maven Repository*, details of which are to be included in the project's **build.gradle** file.

Add a reference to the Maven repository:

.. code:: groovy

    maven {
        url "https://maven.livingmap.com/artifactory/gradle-release"
    }


Include the SDK as a dependency:

.. code:: groovy

    dependencies {
        implementation 'livingmap.com:LivingMapSDK:10.0.+'
    }


Settings
--------

Set the ``minSdkVersion`` of the project to ``24``.

.. code:: groovy

    android {
        defaultConfig {
            minSdkVersion 24
        }
    }


.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.


Permissions
-----------

Implement the ``ACCESS_FINE_LOCATION`` and ``WRITE_EXTERNAL_STORAGE`` permissions in **AndroidManifest.xml** and ensure the user is prompted.

.. code:: xml

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.