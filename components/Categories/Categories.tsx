import { CategoryRelationResponseCollection } from 'generated/graphql-types';

const Categories: React.FC<CategoryRelationResponseCollection> = ({ data }) => {
    return (
        <div>
            {data.map((category) => {
                const { attributes } = category;

                return (
                    <p className="text-slate-900 dark:text-slate-200" key={attributes?.name}>
                        {attributes?.name}
                    </p>
                );
            })}
        </div>
    );
};

export default Categories;
