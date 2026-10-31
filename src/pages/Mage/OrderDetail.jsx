import React from 'react';
import { Link } from 'react-router-dom';
import { BookLink } from '../../components/BookLink';
import BalancedColumns from '../../components/BalancedColumns';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

function OrderSection({ title, content, children }) {
    if (!content?.length && !children) return null;

    return (
        <section className="mt-5">
            <h2 className="mb-1 font-serif text-base font-bold">{title}</h2>
            {content && <StructuredContent content={content} />}
            {children}
        </section>
    );
}

export default function OrderDetail({ order }) {
    if (!order) return null;
    const name = order.DisplayName || order.Name;

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-3 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold">
            <header>
                <h1 className="mb-2 text-3xl font-bold">{name}</h1>
                {order.DisplayName && <p>{order.Name}</p>}
                <p className="font-serif text-lg italic">{order.Nickname}</p>
            </header>

            <BalancedColumns>
                <section aria-label={`${name} background`} className="min-w-0">
                    <StructuredContent content={order.Description} />
                    <OrderSection title="Overview" content={order.Overview} />
                    <OrderSection title="Members" content={order.Members} />
                </section>

                <section aria-label={`${name} practices and society`} className="min-w-0">
                    <dl className="my-5 break-inside-avoid space-y-2">
                        {['Creed', 'Tools', 'Rote Skills'].map((field) => (
                            <div key={field}>
                                <dt className="inline font-bold">{field}: </dt>
                                <dd className="inline">{order[field]}</dd>
                            </div>
                        ))}
                    </dl>
                    <OrderSection title="Philosophy" content={order.Philosophy} />
                    <OrderSection title="Rituals and Observances" content={order.Rituals} />
                    <OrderSection title="Titles and Duties" content={order.Titles} />
                    <OrderSection title="Relations with Other Orders">
                        <dl className="space-y-3">
                            {order.Relations.map((relation) => (
                                <div key={relation.Name}>
                                    <dt className="inline font-bold">
                                        <Link className="underline" to={relation.link}>{relation.DisplayName || relation.Name}</Link>:{' '}
                                    </dt>
                                    <dd className="inline"><InlineContent content={relation.Description} /></dd>
                                </div>
                            ))}
                        </dl>
                    </OrderSection>
                </section>
            </BalancedColumns>

            <div className="mt-8"><b>Book:</b> {BookLink(order.Book)}</div>
        </article>
    );
}
