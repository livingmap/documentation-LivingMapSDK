Initialising LMAAManager
=====================================

.. contents::
    :depth: 2
    :local:


Start LMAA Session 
------------------------

The following is an example of how you can use the AviationAccelerator. In this example we assume the lmaaConfig is instantiated e.g. the same as that in the `LMAAConfig` section.

.. platform-code::
    .. code-block:: java
        :class: platform platform-android
        override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View {
            ...
            LMAAManager lmaaManager = new LMAAManager();
            lmaaManager.start(
            MainActivity.this,		// Handle on application context
            livingMapEventsHandler, // event handler at application level
            lmaaConfig			// Configuration class
            );
        }


    .. code-block:: swift
        :class: platform platform-ios

            let lmaaManager = LMAAManager()
            let lmaaConfig = LMAAConfig(...)

            override func viewDidLoad() {
                super.viewDidLoad()

                do {
                    try lmaaManager.start(eventHandler: LivingMapMappingEvents , lmaaConfig: lmaaConfig)
                } catch {
                    print("There is already an instance of the AA running")
                }
            }
        }



Stop LMAA Session 
---------------------------------
In order to stop the SDK services it is necessary to call the stop() method. This will stop the positioning system and all related SDK services.

.. platform-code::

    .. code-block:: java
        :class: platform platform-android
   
        lmaaManager.stop(MainActivity.this)

    .. code-block:: swift
        :class: platform platform-ios
        
        override func viewWillDisappear(_ animated: Bool) {
            lmaaManager.stop()
        }

NOTE: 
Please ensure this method is called BEFORE calling the start() method again. This will ensure that the Airline Accelerator has exited cleanly.
