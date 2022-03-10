/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/joke": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.joke.id"];
          jokester_id?: parameters["rowFilter.joke.jokester_id"];
          created_at?: parameters["rowFilter.joke.created_at"];
          updated_at?: parameters["rowFilter.joke.updated_at"];
          name?: parameters["rowFilter.joke.name"];
          content?: parameters["rowFilter.joke.content"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["joke"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** joke */
          joke?: definitions["joke"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.joke.id"];
          jokester_id?: parameters["rowFilter.joke.jokester_id"];
          created_at?: parameters["rowFilter.joke.created_at"];
          updated_at?: parameters["rowFilter.joke.updated_at"];
          name?: parameters["rowFilter.joke.name"];
          content?: parameters["rowFilter.joke.content"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.joke.id"];
          jokester_id?: parameters["rowFilter.joke.jokester_id"];
          created_at?: parameters["rowFilter.joke.created_at"];
          updated_at?: parameters["rowFilter.joke.updated_at"];
          name?: parameters["rowFilter.joke.name"];
          content?: parameters["rowFilter.joke.content"];
        };
        body: {
          /** joke */
          joke?: definitions["joke"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/message": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message.id"];
          created_at?: parameters["rowFilter.message.created_at"];
          title?: parameters["rowFilter.message.title"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["message"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** message */
          message?: definitions["message"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message.id"];
          created_at?: parameters["rowFilter.message.created_at"];
          title?: parameters["rowFilter.message.title"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message.id"];
          created_at?: parameters["rowFilter.message.created_at"];
          title?: parameters["rowFilter.message.title"];
        };
        body: {
          /** message */
          message?: definitions["message"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_name?: parameters["rowFilter.profiles.user_name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_name?: parameters["rowFilter.profiles.user_name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_name?: parameters["rowFilter.profiles.user_name"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          created_at?: parameters["rowFilter.user.created_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
          username?: parameters["rowFilter.user.username"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user */
          user?: definitions["user"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          created_at?: parameters["rowFilter.user.created_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
          username?: parameters["rowFilter.user.username"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          created_at?: parameters["rowFilter.user.created_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
          username?: parameters["rowFilter.user.username"];
        };
        body: {
          /** user */
          user?: definitions["user"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/make_joke": {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: character varying */
            name: string;
            /** Format: character varying */
            content: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  joke: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    jokester_id: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    updated_at: string;
    /** Format: character varying */
    name: string;
    /** Format: character varying */
    content: string;
  };
  message: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    title?: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    user_name: string;
  };
  user: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    updated_at: string;
    /** Format: character varying */
    username: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description joke */
  "body.joke": definitions["joke"];
  /** Format: uuid */
  "rowFilter.joke.id": string;
  /** Format: uuid */
  "rowFilter.joke.jokester_id": string;
  /** Format: timestamp without time zone */
  "rowFilter.joke.created_at": string;
  /** Format: timestamp without time zone */
  "rowFilter.joke.updated_at": string;
  /** Format: character varying */
  "rowFilter.joke.name": string;
  /** Format: character varying */
  "rowFilter.joke.content": string;
  /** @description message */
  "body.message": definitions["message"];
  /** Format: bigint */
  "rowFilter.message.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.message.created_at": string;
  /** Format: text */
  "rowFilter.message.title": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: text */
  "rowFilter.profiles.user_name": string;
  /** @description user */
  "body.user": definitions["user"];
  /** Format: uuid */
  "rowFilter.user.id": string;
  /** Format: timestamp without time zone */
  "rowFilter.user.created_at": string;
  /** Format: timestamp without time zone */
  "rowFilter.user.updated_at": string;
  /** Format: character varying */
  "rowFilter.user.username": string;
}

export interface operations {}

export interface external {}
