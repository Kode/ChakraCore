//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

#pragma warning(push)
// strcpy has inconsistent annotation
#pragma warning(disable: 28252)
#pragma warning(disable: 28253)

#ifdef NDEBUG
#include "Release/ChakraJIT_s.c"
#else
#include "Debug/ChakraJIT_s.c"
#endif

#pragma warning(pop)
