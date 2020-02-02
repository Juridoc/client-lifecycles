/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Lifecycle update request.
 */
@RestDB.Schema.Entity('lifecycles/{id}')
@Class.Describe()
export class Update extends Class.Null {
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
   * Lifecycle status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status.Common))
  @Class.Public()
  public status?: Types.Status.Common;

  /**
   * Number of days for the notice term.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public noticeIn?: number;

  /**
   * Number of days for the prolongation period.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public prolongationFor?: number;
}
