export interface NeePointType {
    x: number,
    y: number
}

interface OptionsType {
    screenArea?: ScreenOptions,
    initialPoint?: NeePointType,
    endPoints?: Array<NeePointType>
    intervalLimits?: LimitsType,
}

export interface ScreenOptions {
    min: {
        x: number,
        y: number,
    },
    max: {
        x: number,
        y: number
    }
}

export interface LimitsType {
    min: number,
    max: number
}

export interface NeeDeltaTimeType {
    previousTime: number,
    delta: number,
}