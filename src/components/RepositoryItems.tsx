interface RepositoryItemsProps {
    repository:{
        name: String;
        description: String;
        url: String;
    }
}

export function RepositoryItems(props:RepositoryItemsProps) {
    return (
        <li>
            <strong>{props.repository?.name ?? "default"}</strong>
            <p>{props.repository?.description ?? "default"}</p>
            <a href="">{props.repository?.url ?? "default"}</a>
        </li>
    );
}