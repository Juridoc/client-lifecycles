/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from '@juridoc/client-profiles';
import * as Documents from '@juridoc/client-documents';
import * as Types from './types';
/**
 * Lifecyle entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Lifecyle Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Context entity (as a document)
     */
    contextAsDocument: Documents.Entity;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Start date.
     */
    startAt?: Date;
    /**
     * Finish date.
     */
    finishAt?: Date;
    /**
     * Notice date.
     */
    noticeAt?: Date;
    /**
     * Reminder date.
     */
    reminderAt?: Date;
    /**
     * Lifecycle status.
     */
    status: Types.Status.Common | Types.Status.System;
    /**
     * Number of days for the notice term.
     */
    noticeIn: number;
    /**
     * Number of days for the prolongation period.
     */
    prolongationFor: number;
    /**
     * Last error response.
     */
    lastError?: RestDB.Entity | null;
}
