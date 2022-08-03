Event Recovery
==============

.. contents::
    :depth: 2
    :local:


In the event of a serious unrecoverable problem the user will be presented with
an error dialog:

Pressing Try Again will result in the AviationAccelerator attempting to recover. 

Pressing Exit will raise an error callback via the errorReceived() handler in the
LivingMapMappingEvents interface.  

This will contain a LivingMapError object with an error severity and error code. At this point the integrator of the AviationAccelerator will need to test the severity and ensure that the stop() method is called in the event of any Error or Fatal_Error problems. 

An example implementation of the error handling using the errorReceived callback:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        Handling the error object from the AirlineAccelerator
            public func errorReceived(error: LivingMapError) {
                NSLog("Error Received: %@", error.errorMessage)

                if error.severity == .fatalError {
                    lmaaManager.stop()
                }
            }

    .. code-block:: swift
            :class: platform platform-ios

            @Override
            public void errorReceived(LivingMapError error) {
            Log.e(TAG, String.format(Locale.getDefault(), 
                                     "Error Severity: %s, Code: %d, Error Received: %s",
                                      error.getSeverity(), 
                                      error.getErrorCode().getErrorCode(),
                                      error.getErrorMessage()));

                if (error.getSeverity() != LivingMapError.LivingMapErrorSeverity.Warning)     {
                    // Stop the AirlineAccelerator
                    lmaaManager.stop(MainActivity.this);
                }
            }

Warnings are raised for information only and don’t require the SDK to be stopped but it’s useful for support purposes to log the message to the application debug console.