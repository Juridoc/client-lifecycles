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
@RestDB.Schema.Entity('lifecycles')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Lifecyle Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Context entity (as a document)
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Documents.Entity, ['id', 'name'])
  @Class.Public()
  public contextAsDocument!: Documents.Entity;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Start date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public startAt?: Date;

  /**
   * Finish date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public finishAt?: Date;

  /**
   * Notice date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public noticeAt?: Date;

  /**
   * Reminder date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public reminderAt?: Date;

  /**
   * Lifecycle status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.Status.Common), ...Object.values(Types.Status.System)])
  @Class.Public()
  public status!: Types.Status.Common | Types.Status.System;

  /**
   * Number of days for the notice term.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public noticeIn!: number;

  /**
   * Number of days for the prolongation period.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public prolongationFor!: number;

  /**
   * Last error response.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public lastError?: RestDB.Entity | null;
}
