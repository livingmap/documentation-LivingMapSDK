Installation on iOS
===================

.. contents::
    :depth: 2
    :local:

This page will outline how to install the *LivingMapSDK* into an iOS application.


Versions
--------

| Latest and stable : 10.3.7
| Stable: 10.3.6


Settings
--------

Set the platform version (i.e. the minimum compatible iOS version) of the project to ``13.1``.

.. code:: ruby

    platform :ios, '13.1'



SDKs Dependencies
------------------

-  Alamofire v5.4.3
-  SwiftProtobuf

CocoaPods
--------------

`CocoaPods <https://cocoapods.org>`__ is a dependency manager for Cocoa
projects. For usage and installation instructions, visit their website.
To integrate LivingMapSDKs into your Xcode project using CocoaPods,
specify it in your ``Podfile``:

LivingMmap Uses the Custom Specs Repo, In order to use the framework artefacts linked by this repo a slight
modification to XCode project podfile is necessary.

You must explicitly state that this repo is a source for the Cocopods
integration system. Add this line of code under the platform declaration
but above the project declaration in the podfile.

::

   source 'git@github.com:livingmap/LivingMap.git'

Point to the latest version:-

.. code:: ruby

       pod 'LivingMapSDK'
       pod 'LivingMapLiveSDK'
       pod 'AirlineAccelerator'

Point to the specific version (recommended):-

.. code:: ruby

       pod 'LivingMapSDK', '10.3.7'
       pod 'LivingMapLiveSDK', '10.3.7'
       pod 'AirlineAccelerator', '10.3.7'

Add SDK Pod Dependencies

for version 10.3.7 :

add the following dependecies in your project ``podfile``

.. code:: ruby

       pod 'Alamofire', '5.4.3'
       pod 'SwiftProtobuf'

Carthage
--------------

`Carthage <https://github.com/Carthage/Carthage>`__ is a decentralized
dependency manager that builds your dependencies and provides you with
binary frameworks. To integrate LivingMapSDKs into your Xcode project
using Carthage, specify it in your ``Cartfile``:

Point to the latest version:-

.. code:: ruby

   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/LivingMapSDK.json"
   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/LivingMapLiveSDK.json"
   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/AviationAccelerator.json"

Point to the specific version (recommended):-

.. code:: ruby

   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/LivingMapSDK.json" == 10.3.7
   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/LivingMapLiveSDK.json" == 10.3.7
   binary "https://raw.githubusercontent.com/livingmap/LivingMap/main/AviationAccelerator.json" == 10.3.7

Add SDK Carthage Dependencies

for version 10.3.7 : add the following dependecies in your project
``Cartfile``

.. code:: ruby

       github "Alamofire/Alamofire" == 5.4.3
       github "apple/swift-protobuf"

to download the dependecies use the following command in the project
deirectory

``carthage update --use-xcframeworks --platform ios``

to clear carthage cache before update

``rm -rf ~/Library/Caches/org.carthage.CarthageKit``

the frameworks/xcFrameworks downloaded in the
``<project>/Carthage/Build`` directory attach the
frameworks/xcFrameworks in the project through one of the following
approaches:

-  in the project tabs General –> Frameworks, Libraries, and Embedded
   Content

-  in the project tabs Build Phases –> Embeded Frameworks

make sure the frameworks/xcFrameworks embeded and signed.

Swift Package Manager
-----------------------

The `Swift Package Manager <https://swift.org/package-manager/>`__ is a
tool for automating the distribution of Swift code and is integrated
into the ``swift`` compiler.

adding LivingMapSDKs as a dependency can be done through Xcode:

-  in your project file tab select ``Add Packages``
-  use LivingMap github link ``https://github.com/livingmap/LivingMap``
   in the search
-  add the livingMap package to your project and you are all set

### Permissions

---

Ensure your app implements `Location Updates` capability and prompts the user for `Location Permissions`.

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by _LivingMapSDK_ when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.