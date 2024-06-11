// CRUD

// Estrutura principal do miniTwitter, contendo arrays para usuários e posts
const miniTwitter = {
    usuarios: [
        {
            username: 'pedrolopes', // Exemplo de um usuário
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'pedrolopes', // Dono do post
            content: 'Meu primeiro Twitter', // Conteúdo do post
        }
    ],
};

// Função para criar um novo post
function create(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1, // Gera um novo ID baseado no comprimento do array de posts
        owner: dados.owner, // Dono do post
        content: dados.content // Conteúdo do post
    });
}

// Criando novos posts para testar a funcionalidade CREATE
criaPost({ owner: 'pedrolopes', content: 'Segundo twitter' });
criaPost({ owner: 'pedrolopes', content: 'Terceiro twitter' });

// Função para retornar todos os posts
function pegaPosts() {
    return miniTwitter.posts;
}

// Função para atualizar o conteúdo de um post existente
function atualizaContentDoPost(id, novoConteudo) {
    // Encontra o post pelo ID
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    // Atualiza o conteúdo do post, se encontrado
    if (postQueVaiSerAtualizado) {
        postQueVaiSerAtualizado.content = novoConteudo;
    } else {
        console.error(`Post com id ${id} não encontrado.`); // Log de erro se o post não for encontrado
    }
}

// Atualiza o conteúdo do post com ID 1
atualizaContentDoPost(1, 'Novo conteúdo do twitter');

// Função para apagar um post pelo ID
function apagaPost(id) {
    // Filtra os posts para remover o post com o ID fornecido
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    });

    // Atualiza o array de posts com a lista filtrada
    miniTwitter.posts = listaDePostsAtualizada;
}

// Apaga o post com ID 2
apagaPost(2);

// Imprime todos os posts restantes para verificar as operações
console.log(pegaPosts());
