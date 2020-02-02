/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Lifecyles mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the lifecyle that corresponds to the specified Id.
     * @param id Lifecyle Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the lifecyle entity.
     * @throws Throws an error when the lifecycle wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the lifecycle that corresponds to the specified Id based on the given update request.
     * @param id Lifecycle Id.
     * @param request Update request.
     * @returns Returns a promise to get true when the lifecycle was updated, false otherwise.
     * @throws Throws an error when the lifecycle wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all lifecyles that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the lifecyle list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all lifecyles that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of lifecyles or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
