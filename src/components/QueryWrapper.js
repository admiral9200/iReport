import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";
import Button from "./Button";
import Loader from "./Loader";

const QueryWrapper = ({ children }) => {
    return (
        <QueryErrorResetBoundary>
            {({reset}) => (
                <ErrorBoundary
                    fallbackRender={({error, resetErrorBoundary}) => (
                        <div>
                            There was an error!{"  "}
                            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                            <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
                        </div>
                    )}
                    onReset={reset}
                >
                    <Suspense fallback={<Loader />}>{children}</Suspense>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    )
}

export default QueryWrapper;