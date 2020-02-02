/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Lifecycle update request.
 */
export declare class Update extends Class.Null {
    /**
     * Start date.
     */
    startAt?: Date;
    /**
     * Finish date.
     */
    finishAt?: Date;
    /**
     * Lifecycle status.
     */
    status?: Types.Status.Common;
    /**
     * Number of days for the notice term.
     */
    noticeIn?: number;
    /**
     * Number of days for the prolongation period.
     */
    prolongationFor?: number;
}
