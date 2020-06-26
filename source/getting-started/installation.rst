Installation
============

.. contents::
    :depth: 2
    :local:

This page will outline how to install the *LivingMapSDK* into your Android or iOS application.



Android
-------

.. note:: Examples below are entries into an application's *Gradle Build* file

Dependencies
************

Android dependencies are managed via the *Living Map Maven Repository*, details of which are to be included in the project's **build.gradle** file.

Add a reference to the Maven repository:

.. code:: groovy

    maven {
        url "http://maven.livingmap.com:8081/artifactory/gradle-dev-local"
    }


Include the SDK as a dependency:

.. code:: groovy

    dependencies {
        implementation 'livingmap.com:LivingMapSDK:X.Y.Z'
    }

.. attention:: Set ``X.Y.Z`` to be the latest numerical version of the SDK



Settings
********

Set the ``minSdkVersion`` of the project to ``24``.

.. code:: groovy

    android {
        defaultConfig {
            minSdkVersion 24
        }
    }


Permissions
***********

Implement the ``ACCESS_FINE_LOCATION`` permission in **AndroidManifest.xml** and ensure the user is prompted.

.. code:: xml

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />



iOS
---

.. note:: Examples below are entries into an application's *Podfile*

Dependencies
************

iOS dependencies are managed via the Living Map CocoaPods distribution repository, details of which are to be included in the project's **Podfile**.

.. code:: ruby

    target 'MyApplication' do
      pod 'LivingMapSDK', :git => 'git@github.com:livingmap/mobile-mono-distribution.git'
    end

Save the Podfile and run ``pod install`` from your a terminal window to install the LivingMapSDK dependency.


Settings
********

Set the platform version (i.e. the minimum compatible iOS version) of the project to ``11.0``.

.. code:: ruby

    platform :ios, '11.0'


Permissions
***********

Ensure your app implements ``Location Updates`` capability and prompts the user for ``Location Permissions``.