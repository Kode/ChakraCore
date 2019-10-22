//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
#pragma once

#define PAL_STDCPP_COMPAT

#include "CommonMin.h"

#ifdef _MSC_VER
#pragma warning(push)
#if defined(PROFILE_RECYCLER_ALLOC) || defined(HEAP_TRACK_ALLOC) || defined(ENABLE_DEBUG_CONFIG_OPTIONS)
#if _MSC_VER < 1923
#include <typeinfo.h>
#else
#include <typeinfo>
#endif
#endif
#pragma warning(pop)
#endif
