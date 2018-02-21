import { ApolloLink, Operation, FetchResult, Observable } from 'apollo-link';
import { GraphQLSchema } from 'graphql';
export declare namespace SchemaLink {
    interface Options {
        schema: GraphQLSchema;
        rootValue?: any;
    }
}
export declare class SchemaLink extends ApolloLink {
    schema: GraphQLSchema;
    rootValue: any;
    constructor({schema, rootValue}: SchemaLink.Options);
    request(operation: Operation): Observable<FetchResult> | null;
}
export default SchemaLink;
