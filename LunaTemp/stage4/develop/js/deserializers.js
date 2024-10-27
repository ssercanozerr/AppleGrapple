var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointSpring' )
  var i247 = data
  i246.spring = i247[0]
  i246.damper = i247[1]
  i246.targetPosition = i247[2]
  return i246
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointMotor' )
  var i249 = data
  i248.m_TargetVelocity = i249[0]
  i248.m_Force = i249[1]
  i248.m_FreeSpin = i249[2]
  return i248
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointLimits' )
  var i251 = data
  i250.m_Min = i251[0]
  i250.m_Max = i251[1]
  i250.m_Bounciness = i251[2]
  i250.m_BounceMinVelocity = i251[3]
  i250.m_ContactDistance = i251[4]
  i250.minBounce = i251[5]
  i250.maxBounce = i251[6]
  return i250
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointDrive' )
  var i253 = data
  i252.m_PositionSpring = i253[0]
  i252.m_PositionDamper = i253[1]
  i252.m_MaximumForce = i253[2]
  i252.m_UseAcceleration = i253[3]
  return i252
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i255 = data
  i254.m_Spring = i255[0]
  i254.m_Damper = i255[1]
  return i254
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i257 = data
  i256.m_Limit = i257[0]
  i256.m_Bounciness = i257[1]
  i256.m_ContactDistance = i257[2]
  return i256
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i259 = data
  i258.m_ExtremumSlip = i259[0]
  i258.m_ExtremumValue = i259[1]
  i258.m_AsymptoteSlip = i259[2]
  i258.m_AsymptoteValue = i259[3]
  i258.m_Stiffness = i259[4]
  return i258
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i261 = data
  i260.m_LowerAngle = i261[0]
  i260.m_UpperAngle = i261[1]
  return i260
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i263 = data
  i262.m_MotorSpeed = i263[0]
  i262.m_MaximumMotorTorque = i263[1]
  return i262
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i265 = data
  i264.m_DampingRatio = i265[0]
  i264.m_Frequency = i265[1]
  i264.m_Angle = i265[2]
  return i264
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i267 = data
  i266.m_LowerTranslation = i267[0]
  i266.m_UpperTranslation = i267[1]
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i268 = root || new pc.UnityMaterial()
  var i269 = data
  i268.name = i269[0]
  request.r(i269[1], i269[2], 0, i268, 'shader')
  i268.renderQueue = i269[3]
  i268.enableInstancing = !!i269[4]
  var i271 = i269[5]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i271[i + 0]) );
  }
  i268.floatParameters = i270
  var i273 = i269[6]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i273[i + 0]) );
  }
  i268.colorParameters = i272
  var i275 = i269[7]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i275[i + 0]) );
  }
  i268.vectorParameters = i274
  var i277 = i269[8]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i277[i + 0]) );
  }
  i268.textureParameters = i276
  var i279 = i269[9]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i279[i + 0]) );
  }
  i268.materialFlags = i278
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = i283[1]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i287 = data
  i286.name = i287[0]
  i286.value = new pc.Color(i287[1], i287[2], i287[3], i287[4])
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i291 = data
  i290.name = i291[0]
  i290.value = new pc.Vec4( i291[1], i291[2], i291[3], i291[4] )
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i295 = data
  i294.name = i295[0]
  request.r(i295[1], i295[2], 0, i294, 'value')
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i299 = data
  i298.name = i299[0]
  i298.enabled = !!i299[1]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i301 = data
  i300.name = i301[0]
  i300.width = i301[1]
  i300.height = i301[2]
  i300.mipmapCount = i301[3]
  i300.anisoLevel = i301[4]
  i300.filterMode = i301[5]
  i300.hdr = !!i301[6]
  i300.format = i301[7]
  i300.wrapMode = i301[8]
  i300.alphaIsTransparency = !!i301[9]
  i300.alphaSource = i301[10]
  i300.graphicsFormat = i301[11]
  i300.sRGBTexture = !!i301[12]
  i300.desiredColorSpace = i301[13]
  i300.wrapU = i301[14]
  i300.wrapV = i301[15]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i303 = data
  i302.name = i303[0]
  i302.index = i303[1]
  i302.startup = !!i303[2]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i305 = data
  i304.position = new pc.Vec3( i305[0], i305[1], i305[2] )
  i304.scale = new pc.Vec3( i305[3], i305[4], i305[5] )
  i304.rotation = new pc.Quat(i305[6], i305[7], i305[8], i305[9])
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i307 = data
  i306.enabled = !!i307[0]
  i306.aspect = i307[1]
  i306.orthographic = !!i307[2]
  i306.orthographicSize = i307[3]
  i306.backgroundColor = new pc.Color(i307[4], i307[5], i307[6], i307[7])
  i306.nearClipPlane = i307[8]
  i306.farClipPlane = i307[9]
  i306.fieldOfView = i307[10]
  i306.depth = i307[11]
  i306.clearFlags = i307[12]
  i306.cullingMask = i307[13]
  i306.rect = i307[14]
  request.r(i307[15], i307[16], 0, i306, 'targetTexture')
  i306.usePhysicalProperties = !!i307[17]
  i306.focalLength = i307[18]
  i306.sensorSize = new pc.Vec2( i307[19], i307[20] )
  i306.lensShift = new pc.Vec2( i307[21], i307[22] )
  i306.gateFit = i307[23]
  return i306
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i308 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i309 = data
  i308.m_ShowDebugText = !!i309[0]
  i308.m_ShowCameraFrustum = !!i309[1]
  i308.m_IgnoreTimeScale = !!i309[2]
  request.r(i309[3], i309[4], 0, i308, 'm_WorldUpOverride')
  i308.m_UpdateMethod = i309[5]
  i308.m_BlendUpdateMethod = i309[6]
  i308.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i309[7], i308.m_DefaultBlend)
  request.r(i309[8], i309[9], 0, i308, 'm_CustomBlends')
  i308.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i309[10], i308.m_CameraCutEvent)
  i308.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i309[11], i308.m_CameraActivatedEvent)
  return i308
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i310 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i311 = data
  i310.m_Style = i311[0]
  i310.m_Time = i311[1]
  i310.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i311[2] } )
  return i310
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i312 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i313 = data
  i312.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i313[0], i312.m_PersistentCalls)
  return i312
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i315 = data
  var i317 = i315[0]
  var i316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i317.length; i += 1) {
    i316.add(request.d('UnityEngine.Events.PersistentCall', i317[i + 0]));
  }
  i314.m_Calls = i316
  return i314
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i321 = data
  request.r(i321[0], i321[1], 0, i320, 'm_Target')
  i320.m_TargetAssemblyTypeName = i321[2]
  i320.m_MethodName = i321[3]
  i320.m_Mode = i321[4]
  i320.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i321[5], i320.m_Arguments)
  i320.m_CallState = i321[6]
  return i320
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i322 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i323 = data
  i322.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i323[0], i322.m_PersistentCalls)
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i325 = data
  i324.name = i325[0]
  i324.tagId = i325[1]
  i324.enabled = !!i325[2]
  i324.isStatic = !!i325[3]
  i324.layer = i325[4]
  return i324
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i326 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i327 = data
  request.r(i327[0], i327[1], 0, i326, 'm_LookAt')
  request.r(i327[2], i327[3], 0, i326, 'm_Follow')
  i326.m_Lens = request.d('Cinemachine.LensSettings', i327[4], i326.m_Lens)
  i326.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i327[5], i326.m_Transitions)
  var i329 = i327[6]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( i329[i + 0] );
  }
  i326.m_ExcludedPropertiesInInspector = i328
  var i331 = i327[7]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( i331[i + 0] );
  }
  i326.m_LockStageInInspector = i330
  i326.m_Priority = i327[8]
  i326.m_StandbyUpdate = i327[9]
  i326.m_LegacyBlendHint = i327[10]
  request.r(i327[11], i327[12], 0, i326, 'm_ComponentOwner')
  i326.m_StreamingVersion = i327[13]
  return i326
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i332 = root || request.c( 'Cinemachine.LensSettings' )
  var i333 = data
  i332.FieldOfView = i333[0]
  i332.OrthographicSize = i333[1]
  i332.NearClipPlane = i333[2]
  i332.FarClipPlane = i333[3]
  i332.Dutch = i333[4]
  i332.ModeOverride = i333[5]
  i332.LensShift = new pc.Vec2( i333[6], i333[7] )
  i332.GateFit = i333[8]
  i332.FocusDistance = i333[9]
  i332.m_SensorSize = new pc.Vec2( i333[10], i333[11] )
  return i332
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i334 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i335 = data
  i334.m_BlendHint = i335[0]
  i334.m_InheritPosition = !!i335[1]
  i334.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i335[2], i334.m_OnCameraLive)
  return i334
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i340 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i341 = data
  return i340
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i342 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i343 = data
  i342.m_TrackedObjectOffset = new pc.Vec3( i343[0], i343[1], i343[2] )
  i342.m_LookaheadTime = i343[3]
  i342.m_LookaheadSmoothing = i343[4]
  i342.m_LookaheadIgnoreY = !!i343[5]
  i342.m_XDamping = i343[6]
  i342.m_YDamping = i343[7]
  i342.m_ZDamping = i343[8]
  i342.m_TargetMovementOnly = !!i343[9]
  i342.m_ScreenX = i343[10]
  i342.m_ScreenY = i343[11]
  i342.m_CameraDistance = i343[12]
  i342.m_DeadZoneWidth = i343[13]
  i342.m_DeadZoneHeight = i343[14]
  i342.m_DeadZoneDepth = i343[15]
  i342.m_UnlimitedSoftZone = !!i343[16]
  i342.m_SoftZoneWidth = i343[17]
  i342.m_SoftZoneHeight = i343[18]
  i342.m_BiasX = i343[19]
  i342.m_BiasY = i343[20]
  i342.m_CenterOnActivate = !!i343[21]
  i342.m_GroupFramingMode = i343[22]
  i342.m_AdjustmentMode = i343[23]
  i342.m_GroupFramingSize = i343[24]
  i342.m_MaxDollyIn = i343[25]
  i342.m_MaxDollyOut = i343[26]
  i342.m_MinimumDistance = i343[27]
  i342.m_MaximumDistance = i343[28]
  i342.m_MinimumFOV = i343[29]
  i342.m_MaximumFOV = i343[30]
  i342.m_MinimumOrthoSize = i343[31]
  i342.m_MaximumOrthoSize = i343[32]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i345 = data
  i344.radius = i345[0]
  i344.enabled = !!i345[1]
  i344.isTrigger = !!i345[2]
  i344.usedByEffector = !!i345[3]
  i344.density = i345[4]
  i344.offset = new pc.Vec2( i345[5], i345[6] )
  request.r(i345[7], i345[8], 0, i344, 'material')
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i347 = data
  i346.bodyType = i347[0]
  request.r(i347[1], i347[2], 0, i346, 'material')
  i346.simulated = !!i347[3]
  i346.useAutoMass = !!i347[4]
  i346.mass = i347[5]
  i346.drag = i347[6]
  i346.angularDrag = i347[7]
  i346.gravityScale = i347[8]
  i346.collisionDetectionMode = i347[9]
  i346.sleepMode = i347[10]
  i346.constraints = i347[11]
  return i346
}

Deserializers["PlayerMovementController"] = function (request, data, root) {
  var i348 = root || request.c( 'PlayerMovementController' )
  var i349 = data
  i348.speed = i349[0]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i351 = data
  i350.enabled = !!i351[0]
  request.r(i351[1], i351[2], 0, i350, 'sharedMaterial')
  var i353 = i351[3]
  var i352 = []
  for(var i = 0; i < i353.length; i += 2) {
  request.r(i353[i + 0], i353[i + 1], 2, i352, '')
  }
  i350.sharedMaterials = i352
  i350.receiveShadows = !!i351[4]
  i350.shadowCastingMode = i351[5]
  i350.sortingLayerID = i351[6]
  i350.sortingOrder = i351[7]
  i350.lightmapIndex = i351[8]
  i350.lightmapSceneIndex = i351[9]
  i350.lightmapScaleOffset = new pc.Vec4( i351[10], i351[11], i351[12], i351[13] )
  i350.lightProbeUsage = i351[14]
  i350.reflectionProbeUsage = i351[15]
  i350.color = new pc.Color(i351[16], i351[17], i351[18], i351[19])
  request.r(i351[20], i351[21], 0, i350, 'sprite')
  i350.flipX = !!i351[22]
  i350.flipY = !!i351[23]
  i350.drawMode = i351[24]
  i350.size = new pc.Vec2( i351[25], i351[26] )
  i350.tileMode = i351[27]
  i350.adaptiveModeThreshold = i351[28]
  i350.maskInteraction = i351[29]
  i350.spriteSortPoint = i351[30]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i357 = data
  i356.ambientIntensity = i357[0]
  i356.reflectionIntensity = i357[1]
  i356.ambientMode = i357[2]
  i356.ambientLight = new pc.Color(i357[3], i357[4], i357[5], i357[6])
  i356.ambientSkyColor = new pc.Color(i357[7], i357[8], i357[9], i357[10])
  i356.ambientGroundColor = new pc.Color(i357[11], i357[12], i357[13], i357[14])
  i356.ambientEquatorColor = new pc.Color(i357[15], i357[16], i357[17], i357[18])
  i356.fogColor = new pc.Color(i357[19], i357[20], i357[21], i357[22])
  i356.fogEndDistance = i357[23]
  i356.fogStartDistance = i357[24]
  i356.fogDensity = i357[25]
  i356.fog = !!i357[26]
  request.r(i357[27], i357[28], 0, i356, 'skybox')
  i356.fogMode = i357[29]
  var i359 = i357[30]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i359[i + 0]) );
  }
  i356.lightmaps = i358
  i356.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i357[31], i356.lightProbes)
  i356.lightmapsMode = i357[32]
  i356.mixedBakeMode = i357[33]
  i356.environmentLightingMode = i357[34]
  i356.ambientProbe = new pc.SphericalHarmonicsL2(i357[35])
  i356.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i357[36])
  i356.useReferenceAmbientProbe = !!i357[37]
  request.r(i357[38], i357[39], 0, i356, 'customReflection')
  request.r(i357[40], i357[41], 0, i356, 'defaultReflection')
  i356.defaultReflectionMode = i357[42]
  i356.defaultReflectionResolution = i357[43]
  i356.sunLightObjectId = i357[44]
  i356.pixelLightCount = i357[45]
  i356.defaultReflectionHDR = !!i357[46]
  i356.hasLightDataAsset = !!i357[47]
  i356.hasManualGenerate = !!i357[48]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, 'lightmapColor')
  request.r(i363[2], i363[3], 0, i362, 'lightmapDirection')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i364 = root || new UnityEngine.LightProbes()
  var i365 = data
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i373 = data
  var i375 = i373[0]
  var i374 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i375.length; i += 1) {
    i374.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i375[i + 0]));
  }
  i372.ShaderCompilationErrors = i374
  i372.name = i373[1]
  i372.guid = i373[2]
  var i377 = i373[3]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( i377[i + 0] );
  }
  i372.shaderDefinedKeywords = i376
  var i379 = i373[4]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i379[i + 0]) );
  }
  i372.passes = i378
  var i381 = i373[5]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i381[i + 0]) );
  }
  i372.usePasses = i380
  var i383 = i373[6]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i383[i + 0]) );
  }
  i372.defaultParameterValues = i382
  request.r(i373[7], i373[8], 0, i372, 'unityFallbackShader')
  i372.readDepth = !!i373[9]
  i372.isCreatedByShaderGraph = !!i373[10]
  i372.usedBatchUniforms = i373[11]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i387 = data
  i386.shaderName = i387[0]
  i386.errorMessage = i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i390 = root || new pc.UnityShaderPass()
  var i391 = data
  i390.id = i391[0]
  i390.subShaderIndex = i391[1]
  i390.name = i391[2]
  i390.passType = i391[3]
  i390.grabPassTextureName = i391[4]
  i390.usePass = !!i391[5]
  i390.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[6], i390.zTest)
  i390.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[7], i390.zWrite)
  i390.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[8], i390.culling)
  i390.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i391[9], i390.blending)
  i390.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i391[10], i390.alphaBlending)
  i390.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[11], i390.colorWriteMask)
  i390.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[12], i390.offsetUnits)
  i390.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[13], i390.offsetFactor)
  i390.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[14], i390.stencilRef)
  i390.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[15], i390.stencilReadMask)
  i390.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[16], i390.stencilWriteMask)
  i390.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[17], i390.stencilOp)
  i390.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[18], i390.stencilOpFront)
  i390.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[19], i390.stencilOpBack)
  var i393 = i391[20]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i393[i + 0]) );
  }
  i390.tags = i392
  var i395 = i391[21]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( i395[i + 0] );
  }
  i390.passDefinedKeywords = i394
  var i397 = i391[22]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i397[i + 0]) );
  }
  i390.passDefinedKeywordGroups = i396
  var i399 = i391[23]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i399[i + 0]) );
  }
  i390.variants = i398
  var i401 = i391[24]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i401[i + 0]) );
  }
  i390.excludedVariants = i400
  i390.hasDepthReader = !!i391[25]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i403 = data
  i402.val = i403[0]
  i402.name = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i405 = data
  i404.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[0], i404.src)
  i404.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[1], i404.dst)
  i404.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[2], i404.op)
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i407 = data
  i406.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[0], i406.pass)
  i406.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[1], i406.fail)
  i406.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[2], i406.zFail)
  i406.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[3], i406.comp)
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i411 = data
  i410.name = i411[0]
  i410.value = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i415 = data
  var i417 = i415[0]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( i417[i + 0] );
  }
  i414.keywords = i416
  i414.hasDiscard = !!i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i421 = data
  i420.passId = i421[0]
  i420.subShaderIndex = i421[1]
  var i423 = i421[2]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( i423[i + 0] );
  }
  i420.keywords = i422
  i420.vertexProgram = i421[3]
  i420.fragmentProgram = i421[4]
  i420.compiledForWebGL2 = !!i421[5]
  i420.readDepth = !!i421[6]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'shader')
  i426.pass = i427[2]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i431 = data
  i430.name = i431[0]
  i430.type = i431[1]
  i430.value = new pc.Vec4( i431[2], i431[3], i431[4], i431[5] )
  i430.textureValue = i431[6]
  i430.shaderPropertyFlag = i431[7]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i433 = data
  i432.name = i433[0]
  request.r(i433[1], i433[2], 0, i432, 'texture')
  i432.aabb = i433[3]
  i432.vertices = i433[4]
  i432.triangles = i433[5]
  i432.textureRect = UnityEngine.Rect.MinMaxRect(i433[6], i433[7], i433[8], i433[9])
  i432.packedRect = UnityEngine.Rect.MinMaxRect(i433[10], i433[11], i433[12], i433[13])
  i432.border = new pc.Vec4( i433[14], i433[15], i433[16], i433[17] )
  i432.transparency = i433[18]
  i432.bounds = i433[19]
  i432.pixelsPerUnit = i433[20]
  i432.textureWidth = i433[21]
  i432.textureHeight = i433[22]
  i432.nativeSize = new pc.Vec2( i433[23], i433[24] )
  i432.pivot = new pc.Vec2( i433[25], i433[26] )
  i432.textureRectOffset = new pc.Vec2( i433[27], i433[28] )
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i435 = data
  var i437 = i435[0]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i437[i + 0]) );
  }
  i434.files = i436
  i434.componentToPrefabIds = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i441 = data
  i440.path = i441[0]
  request.r(i441[1], i441[2], 0, i440, 'unityObject')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i443 = data
  var i445 = i443[0]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i445[i + 0]) );
  }
  i442.scriptsExecutionOrder = i444
  var i447 = i443[1]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i447[i + 0]) );
  }
  i442.sortingLayers = i446
  var i449 = i443[2]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i449[i + 0]) );
  }
  i442.cullingLayers = i448
  i442.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i443[3], i442.timeSettings)
  i442.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i443[4], i442.physicsSettings)
  i442.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i443[5], i442.physics2DSettings)
  i442.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i443[6], i442.qualitySettings)
  i442.enableRealtimeShadows = !!i443[7]
  i442.enableAutoInstancing = !!i443[8]
  i442.enableDynamicBatching = !!i443[9]
  i442.lightmapEncodingQuality = i443[10]
  i442.desiredColorSpace = i443[11]
  var i451 = i443[12]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( i451[i + 0] );
  }
  i442.allTags = i450
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i455 = data
  i454.name = i455[0]
  i454.value = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i459 = data
  i458.id = i459[0]
  i458.name = i459[1]
  i458.value = i459[2]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i463 = data
  i462.id = i463[0]
  i462.name = i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i465 = data
  i464.fixedDeltaTime = i465[0]
  i464.maximumDeltaTime = i465[1]
  i464.timeScale = i465[2]
  i464.maximumParticleTimestep = i465[3]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i467 = data
  i466.gravity = new pc.Vec3( i467[0], i467[1], i467[2] )
  i466.defaultSolverIterations = i467[3]
  i466.bounceThreshold = i467[4]
  i466.autoSyncTransforms = !!i467[5]
  i466.autoSimulation = !!i467[6]
  var i469 = i467[7]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i469[i + 0]) );
  }
  i466.collisionMatrix = i468
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i473 = data
  i472.enabled = !!i473[0]
  i472.layerId = i473[1]
  i472.otherLayerId = i473[2]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'material')
  i474.gravity = new pc.Vec2( i475[2], i475[3] )
  i474.positionIterations = i475[4]
  i474.velocityIterations = i475[5]
  i474.velocityThreshold = i475[6]
  i474.maxLinearCorrection = i475[7]
  i474.maxAngularCorrection = i475[8]
  i474.maxTranslationSpeed = i475[9]
  i474.maxRotationSpeed = i475[10]
  i474.baumgarteScale = i475[11]
  i474.baumgarteTOIScale = i475[12]
  i474.timeToSleep = i475[13]
  i474.linearSleepTolerance = i475[14]
  i474.angularSleepTolerance = i475[15]
  i474.defaultContactOffset = i475[16]
  i474.autoSimulation = !!i475[17]
  i474.queriesHitTriggers = !!i475[18]
  i474.queriesStartInColliders = !!i475[19]
  i474.callbacksOnDisable = !!i475[20]
  i474.reuseCollisionCallbacks = !!i475[21]
  i474.autoSyncTransforms = !!i475[22]
  var i477 = i475[23]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i477[i + 0]) );
  }
  i474.collisionMatrix = i476
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i481 = data
  i480.enabled = !!i481[0]
  i480.layerId = i481[1]
  i480.otherLayerId = i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i483 = data
  var i485 = i483[0]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i485[i + 0]) );
  }
  i482.qualityLevels = i484
  var i487 = i483[1]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( i487[i + 0] );
  }
  i482.names = i486
  i482.shadows = i483[2]
  i482.anisotropicFiltering = i483[3]
  i482.antiAliasing = i483[4]
  i482.lodBias = i483[5]
  i482.shadowCascades = i483[6]
  i482.shadowDistance = i483[7]
  i482.shadowmaskMode = i483[8]
  i482.shadowProjection = i483[9]
  i482.shadowResolution = i483[10]
  i482.softParticles = !!i483[11]
  i482.softVegetation = !!i483[12]
  i482.activeColorSpace = i483[13]
  i482.desiredColorSpace = i483[14]
  i482.masterTextureLimit = i483[15]
  i482.maxQueuedFrames = i483[16]
  i482.particleRaycastBudget = i483[17]
  i482.pixelLightCount = i483[18]
  i482.realtimeReflectionProbes = !!i483[19]
  i482.shadowCascade2Split = i483[20]
  i482.shadowCascade4Split = new pc.Vec3( i483[21], i483[22], i483[23] )
  i482.streamingMipmapsActive = !!i483[24]
  i482.vSyncCount = i483[25]
  i482.asyncUploadBufferSize = i483[26]
  i482.asyncUploadTimeSlice = i483[27]
  i482.billboardsFaceCameraPosition = !!i483[28]
  i482.shadowNearPlaneOffset = i483[29]
  i482.streamingMipmapsMemoryBudget = i483[30]
  i482.maximumLODLevel = i483[31]
  i482.streamingMipmapsAddAllCameras = !!i483[32]
  i482.streamingMipmapsMaxLevelReduction = i483[33]
  i482.streamingMipmapsRenderersPerFrame = i483[34]
  i482.resolutionScalingFixedDPIFactor = i483[35]
  i482.streamingMipmapsMaxFileIORequests = i483[36]
  i482.currentQualityLevel = i483[37]
  return i482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_ObjectArgument')
  i490.m_ObjectArgumentAssemblyTypeName = i491[2]
  i490.m_IntArgument = i491[3]
  i490.m_FloatArgument = i491[4]
  i490.m_StringArgument = i491[5]
  i490.m_BoolArgument = !!i491[6]
  return i490
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"16":[17],"18":[17],"19":[17],"20":[17],"21":[17],"22":[17],"23":[24],"25":[2],"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[27],"34":[10],"35":[10],"36":[10],"37":[10],"38":[10],"39":[10],"40":[10],"41":[10],"42":[10],"43":[10],"44":[10],"45":[10],"46":[10],"47":[2],"48":[49],"50":[51],"52":[51],"53":[54],"55":[56],"57":[12],"58":[56],"59":[54],"60":[54],"61":[53],"62":[63,54],"64":[54],"65":[53],"66":[54],"67":[54],"68":[54],"69":[54],"70":[54],"71":[54],"72":[54],"73":[54],"74":[54],"75":[63,54],"76":[54],"77":[54],"78":[54],"79":[54],"80":[63,54],"81":[54],"82":[83],"84":[83],"85":[83],"86":[83],"87":[2],"88":[2],"89":[90],"91":[2],"92":[54],"93":[49,54],"94":[54,63],"95":[54],"96":[63,54],"97":[49],"98":[63,54],"99":[54],"100":[56],"101":[2],"102":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineFramingTransposer","UnityEngine.CircleCollider2D","UnityEngine.Rigidbody2D","PlayerMovementController","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.51f1";

Deserializers.productName = "AppleGrapple";

Deserializers.lunaInitializationTime = "10/25/2024 14:52:10";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "AppleGrapple";

Deserializers.lunaAppID = "25285";

Deserializers.projectId = "78a7024eb5762b2498a403cdfa677ba7";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.2\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1820";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3024";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.DefaultCompany.AppleGrapple";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "44c2e696-c84b-49cf-8c84-280ee7cef47e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

