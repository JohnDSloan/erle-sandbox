var movementObject = {
    'bool': false,
    'startCount': 0,
    'mult': 0,
    'sin': [],
    'sinLength': 0,
    'callback': function(){},
    'now': {},
    'base': {},//abs coordinates on enter with no movement
    'movement': {}, // how much movement to be done
    'abs': {},//all abs 
    'rel': {
        'blank': {
            'name': 'blank',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0, 0, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0,0,0]],
        },

        'rotateLeft': {
            'name': 'rotateLeft',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0, 0.4, 0]],
                    'neck': [[0, 0, 0], [0, 0.2, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0.2, 0]],
                    'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0,-0.5,0]],
        },

        'leanBack': {
            'name': 'leanBack',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.1, 0, 0]],
                    'neck': [[0, 0, 0], [-0.1, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0.3, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[-0.1,0,0]],
        },

        'tiltLeft': {
            'name': 'tiltLeft',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0, 0, -0.1]],
                    'neck': [[0, 0, 0], [0, 0, -0.05]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0, 0, -0.1]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0,-0.075,0]],
        },
        'armBegin': {
            'name': 'armBegin',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0, 0, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]],
                    'upperArm.R': [[0, 0, 0], [-0.6, 0.25, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 1.2]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0.8]],
                },
            },
            'sacc': [[0,0,0],[0,0,0]],
        },

        'laptop': {
            'name': 'laptop',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, -0.5, 0], [0.075, 0, 0]],
                    'neck': [[0, 0, 0], [0, 0.025, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0.10, 0, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[-0.5, 0.15, 2], [0.2, -0.15, 0.1]],
                    'upperArm.R': [[0.5, 0.15, 2], [0.2, 0.15, -0.1]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0.2,0,0]],
        },

        'laptop_glance': {
            'name': 'laptop_glance',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0.05, 0, 0]],
                    'neck': [[0, 0, 0], [0, 0.025, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]],
                    'upperArm.R': [[0, 0, 0], [0.2, 0.25, 0]],
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0.2,0,0]],
        },

        'thinkPrompt': {
            'name': 'thinkPrompt',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.015, -0.025, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, -0.01, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]],
                    'upperArm.R': [[0, 0, 0], [0.2, 0.25, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[-0.025,-0.075,0]]
        },

        'thinkSentence': {
            'name': 'thinkSentence',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.05, 0.2, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.1, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.L': [[0, 0, 0], [0, -0.2, 0]],
                    'upperArm.R': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[-0.05,0.25,0]]
        },

        'thinkSentenceArmNeutral': {
            'name': 'thinkSentenceArmNeutral',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.05, 0.2, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.1, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.6, 0.3, 0.8]],
                    'upperArm.L': [[0, 0, 0], [0, -0.2, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.9, 0.4, 0.4]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[-0.5, -1.1, -0.2], [0, 0.3, 0.5]],
                },
            },
            'sacc': [[0,0,0],[-0.05,0.25,0]]
        },

        'thinkSentenceArmArticleThe': {
            'name': 'thinkSentenceArmArticleThe',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.125, 0.2, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.1, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.675, 0.3, 0.8]],
                    'upperArm.L': [[0, 0, 0], [0, -0.2, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.9, 0.4, 0.4]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[-0.5, -1.1, -0.2], [-0.075, 0.3, 0.5]],
                },
            },
            'sacc': [[0,0,0],[-0.05,0.25,0]]
        },

        'thinkSentenceArmArticleA': {
            'name': 'thinkSentenceArmArticleA',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.1, 0.2, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.1, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.65, 0.3, 0.8]],
                    'upperArm.L': [[0, 0, 0], [0, -0.2, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.9, 0.4, 0.4]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[-0.5, -1.1, -0.2], [-0.05, 0.35, 0.5]],
                },
            },
            'sacc': [[0,0,0],[-0.05,0.25,0]]
        },

        'thinkSentenceArmVerb': {
            'name': 'thinkSentenceArmVerb',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.05, 0.2, -0.025]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.1, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.65, 0.3, 0.6]],
                    'upperArm.L': [[0, 0, 0], [0, -0.2, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.85, 0.4, 0.4]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[-0.5, -1.1, -0.2], [-0.1, 0.25, 0.65]],
                },
            },
            'sacc': [[0,0,0],[-0.05,0.25,0]]
        },

        'thinkSentenceHardArmNeutral': {
            'name': 'thinkSentenceHardArmNeutral',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0.05, 0.25, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.2, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.6, 0.3, 1.6]],
                    'upperArm.L': [[0, 0, 0], [0, -0.4, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.9, 0.25, 0.4]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, -0.9, 0], [0.1, 0.45, 0.3]],
                },
            },
            'sacc': [[0,0,0],[0.1,0.25,0]]
        },

        'confused': {
            'name': 'confused',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, -0.25, 0], [0.15, 0.25, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineUpperInner': [[0, 0, 0], [0, 0.25, 0]],
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[-0.8, 0, 0], [-0.6, 0.3, 1.6]],
                    'upperArm.L': [[0, 0, 0], [0, -0.4, 0]],
                    'upperArm.R': [[0, -0.3, 0], [-0.85, 0.25, 0.35]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, -0.9, 0], [0.1, 0.45, 0.3]],
                },
            },
            'sacc': [[0,0,0],[0.2,0.3,0]]
        },

        'listenToSpeechNormal': {
            'name': 'listenToSpeechNormal',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.125, -0.2, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0.125, -0.04, 0.01]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]],
                    'upperArm.R': [[0, 0, 0], [0.2, 0.25, 0]],
                    'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
                    'lowerArm.R': [[0, 0, 0], [0, 0, 0]],
                },
            },
            'sacc': [[0,0,0],[0,0.16,0]]
        },
     
        'listenToSpeechIntent': {
            'name': 'listenToSpeechIntent',
            'symmetry': 'L',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [-0.225, -0.3, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [0.225, -0.16, 0.065]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'hand.L': [[0, 0, 0], [0, 0, 0]],
                    'hand.R': [[0, 0, 0], [0, 0, 0]],
                    'upperArm.L': [[0, 0, 0], [-1.5, -0.2, 0]],
                    'upperArm.R': [[0, 0, 0], [0.2, 0.25, 0]],
                    'lowerArm.L': [[0, 0, 0], [-0.5, 0.05, -0.1]],
                    'lowerArm.R': [[0, 0, 0], [0, 0.2, 0]],
                },
            },
            'sacc': [[0,0,0],[0,0.35,0]]
        },
     
        'flinch': {
            'name': 'flinch',
            'symmetry': 'B',
            'AUs': {
                'AU1': {
                    'head': [[0, 0, 0], [0.1, 0, 0]],
                    'neck': [[0, 0, 0], [0, 0, 0]],
                },
                'AU1b': {
                    'spineLower': [[0, 0, 0], [0, 0, 0]],
                    'spineUpper': [[0, 0, 0], [0, 0, 0]],
                    'spineUpperInner': [[0, 0, 0], [-0.1, -0.5, 0]],
                },
                'AU2': {
                    'shoulder': [[0, 0, 0], [0, 0, 0]],
                },
                'AU2b': {
                    'upperArm.L': [[0, 0, 0], [-1.2, 0, 0.4]],
                    'upperArm.R': [[0, 0, 0], [-1.2, 0, -0.4]],
                    'lowerArm.L': [[-2, 1.5, 0.5], [-0.3, -0.2, -0.5]],
                    'lowerArm.R': [[2, 1.5, 0.5], [-0.3, 0.2, 0.5]],
                    'hand.L': [[0, 0, 1], [-0.8, 0.2, -0.9]],
                    'hand.R': [[0, 0, 1], [-0.6, -0.2, 1.5]],
                },
            },
            'sacc': [[0,0,0],[0.15,0,0]]
        },

    },

}

