//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

#pragma once

#include "../JITIDL/JITTypes.h"
#ifdef NDEBUG
#include "Release/ChakraJIT.h"
#else
#include "Debug/ChakraJIT.h"
#endif

#include "JITManager.h"
