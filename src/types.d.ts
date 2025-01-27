export interface PointType {
    x: number,
    y: number
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

export interface DeltaTimeType {
    previousTime: number,
    delta: number,
}