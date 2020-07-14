Installation on iOS
===================

.. contents::
    :depth: 2
    :local:

This page will outline how to install the *LivingMapSDK* into an iOS application.


Dependencies
------------

iOS dependencies are managed via the Living Map CocoaPods distribution repository, details of which are to be included in the project's **Podfile**.

.. code:: ruby

    source 'https://github.com/CocoaPods/Specs.git'
    source 'git@github.com:livingmap/distribution-Specs.git'

    target 'MyApp' do
      use_frameworks!
      pod 'LivingMapSDK', '~> 10.0'
    end


Settings
--------

Set the platform version (i.e. the minimum compatible iOS version) of the project to ``11.0``.

.. code:: ruby

    platform :ios, '11.0'


Permissions
-----------

Ensure your app implements ``Location Updates`` capability and prompts the user for ``Location Permissions``.

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.