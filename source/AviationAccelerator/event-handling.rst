Event Handling
==============

.. contents::
    :depth: 2
    :local:


The SDK surfaces certain map journey events to your application so you can act on them should you wish. 
To use these events, you need to create an instance of a LivingMapMappingEvents object and pass the event handler to the map fragment.

Create an instance of LivingMapMappingEvents and override the required methods:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapMappingEvents livingMapMappingEvents = new LivingMapMappingEvents() {
        // Called when the map object has finished loading
            @Override
            public void mapReady() {
            }
        
            // Called when a user on a routing journey has reached their destination
            @Override
            public void destinationReached() {
            }
        
            // Custom event fired from within the map control
            @Override
            public void customEvent(String customEventId, String customEventParameters) {
            }
        
            // The location of the blue dot on the map at every update
            @Override
            public void locationReceived(LivingMapLocation location) {
            }
            // Generic error handler. SDK errors and warnings will be fed back here
            @Override
            public void errorReceived(LivingMapError error) {
            }

            // An event fired within the SDK and surfaced to the app when the connectivity status of the device changes
            @Override
            public void onConnectivityStatusChanged(LivingMapConstants.ConnectivityStatus connectivityStatus) {
            }

        };



    .. code-block:: swift
        :class: platform platform-ios

        public class ViewController: LivingMapMappingEvents {

            // Called when the map has finished loading
            public func mapReady() {}

            // The user has closed the map control
            public func mapClosed() {}

            // Called when a user on a routed journey has reached their destination
            public func destinationReached() {}

            // Custom event fired from within the map control
            public func customEvent(eventId: String, eventParameters: NSArray) {}

            // Generic error handler. SDK errors will be fed back here
            public func errorReceived(error: LivingMapError) {}
        
            // Called when the device connection to the internet changes
            public func onConnectivityStatusChanged(
                connectivityStatus: LivingMapConstants.ConnectivityStatus) {}

            // Indicates that the calibration status of the phones sensors is low
            public func onLowCalibrationStatus(calibrationAlert: UIAlertController) {
                self.present(calibrationAlert, animated: true, completion: nil)

            }

            // The location of the blue dot on the map at every update
            public func locationReceived(location: LMLocation) {}
        }

Note : Due to the sensory requirements of the AviationAccelerator, it is required that device calibration is completed when prompted. 
Calibration of a device is handled by the AviationAccelerator however it is the responsibility of the application to display an event to initialize this process.
The LivingMapMappingEvents provides a callback with UI that should be displayed when the event fires.
The logic for removing the display is then handled within the AviationAccelerator.
Calibration is only required when running the AviationAccelerator on a physical device. As a result no event is returned if running on an emulator.

If the cancel button is selected, then the SDK will rely on the device's own calibrated sensor values, whose quality varies by device and whether the phone has been online long enough to self-calibrate successfully.
It is recommended that the user is encouraged to perform calibration at this stage.
